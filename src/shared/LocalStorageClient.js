import { storage } from '@core/utils/common.util';

export class LocalStorageClient {
  constructor(name) {
    this.name = storageName(name);
  }

  save(state) {
    storage(this.name, state);
    return Promise.resolve();
  }

  get() {
    return new Promise(resolve => {
      const state = storage(this.name);

      setTimeout(() => {
        resolve(state);
      }, 1000);
    });
  }
}

function storageName(param) {
  return 'table-processor:' + param;
}
