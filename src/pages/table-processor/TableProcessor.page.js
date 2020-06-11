import { Page } from '@core/page/Page';
import { createStore } from '@core/store/createStore.function';
import { StateProcessor } from '@core/page/StateProcessor';
import { RootComponent } from '@/components/root/root.component';
import { HeaderComponent } from '@/components/header/header.component';
import { ToolbarComponent } from '@/components/toolbar/toolbar.component';
import { FormulaComponent } from '@/components/formula/formula.component';
import { TableComponent } from '@/components/table/table.component';
import { rootReducer } from '@/store/rootReducer';
import { normalizeInitialState } from '@/store/initial.state';
import { LocalStorageClient } from '@/shared/LocalStorageClient';

export class TableProcessorPage extends Page {
  constructor(param) {
    super(param);

    this.storeSub = null;
    this.processor = new StateProcessor(new LocalStorageClient(this.params));
  }

  async getRoot() {
    const state = await this.processor.get();
    const store = createStore(rootReducer, normalizeInitialState(state));

    this.storeSub = store.subscribe(this.processor.listen);

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
    this.storeSub.unsubscribe();
  }
}
