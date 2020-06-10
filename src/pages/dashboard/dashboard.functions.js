import { storage } from '@core/utils/common.util';

function toHTML(key) {
  const model = storage(key);
  const id = key.split(':')[1];
  console.log(id);
  return `
    <li class="db__record">
      <a href="#table-processor/${id}">${model.title}</a>
      <strong>
        ${new Date(model.openDate).toLocaleDateString()}
        ${new Date(model.openDate).toLocaleTimeString()}
      </strong>
    </li>
  `;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('table-processor')) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function getAllRecordsTable() {
  const keys = getAllKeys();
  if (!keys.length) {
    return `<p>You have not created any tables yet!</p>`;
  }

  return `
    <div class="db__list-header">
        <span>Name</span>
        <span>Opening date</span>
    </div>

    <ul class="db__list">
        ${keys.map(toHTML).join('')}
    </ul>
  `;
}
