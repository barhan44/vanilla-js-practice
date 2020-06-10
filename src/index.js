import './scss/index.scss';

import { createStore } from '@core/utils/createStore.function';
import { debounce, storage } from '@core/utils/common.util';
import { RootComponent } from '@/components/root/root.component';
import { HeaderComponent } from '@/components/header/header.component';
import { ToolbarComponent } from '@/components/toolbar/toolbar.component';
import { FormulaComponent } from '@/components/formula/formula.component';
import { TableComponent } from '@/components/table/table.component';
import { rootReducer } from '@/store/rootReducer';
import { initialState } from '@/store/initial.state';

const store = createStore(rootReducer, initialState);

const stateListener = debounce(state => {
  storage('table-processor-state', state);
}, 300);

store.subscribe(stateListener);

const tp = new RootComponent('#app', {
  components: [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent,
  ],
  store,
});

tp.render();
