import { Page } from '@core/Page';
import { createStore } from '@core/utils/createStore.function';
import { debounce, storage } from '@core/utils/common.util';
import { RootComponent } from '@/components/root/root.component';
import { HeaderComponent } from '@/components/header/header.component';
import { ToolbarComponent } from '@/components/toolbar/toolbar.component';
import { FormulaComponent } from '@/components/formula/formula.component';
import { TableComponent } from '@/components/table/table.component';
import { rootReducer } from '@/store/rootReducer';
import { initialState } from '@/store/initial.state';

export class TableProcessorPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState);

    const stateListener = debounce(state => {
      storage('table-processor-state', state);
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
