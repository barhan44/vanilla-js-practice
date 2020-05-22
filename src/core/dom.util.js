class DomUtil {
  constructor() {}
}

export function $() {
  return new DomUtil();
}

$.create = (tagname, classes = '') => {
  const el = document.createElement(tagname);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
