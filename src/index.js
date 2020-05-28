import './scss/index.scss';

import { RootComponent } from '@/components/root/root.component';
import { HeaderComponent } from '@/components/header/header.component';
import { ToolbarComponent } from '@/components/toolbar/toolbar.component';
import { FormulaComponent } from '@/components/formula/formula.component';
import { TableComponent } from '@/components/table/table.component';

const tp = new RootComponent('#app', {
  components: [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent,
  ],
});

tp.render();
