import { Page } from '@core/Page';
import { createStore } from '@core/utils/createStore.function';
import { debounce, storage } from '@core/utils/common.util';
import { RootComponent } from '@/components/root/root.component';
import { HeaderComponent } from '@/components/header/header.component';
import { ToolbarComponent } from '@/components/toolbar/toolbar.component';
import { FormulaComponent } from '@/components/formula/formula.component';
import { TableComponent } from '@/components/table/table.component';
import { rootReducer } from '@/store/rootReducer';
import { normalizeInitialState } from '@/store/initial.state';

function storageName(param) {
  return 'table-processor:' + param;
}

export class TableProcessorPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString();

    const state = storage(storageName(params));
    const store = createStore(rootReducer, normalizeInitialState(state));
    const stateListener = debounce(state => {
      storage(storageName(params), state);
    }, 300);

    store.subscribe(stateListener);

    this.tp = new RootComponent({
      components: [
        HeaderComponent,
        ToolbarComponent,
        FormulaComponent,
        TableComponent,
      ],
      store,
    });

    return this.tp.getRootNode();
  }

  afterRender() {
    this.tp.init();
  }

  destroy() {
    this.tp.destroy();
  }
}
