import { AbstractComponent } from '@core/AbstractComponent';
import { createTable } from '@/components/table/table.template';

export class TableComponent extends AbstractComponent {
  static className = 'table-processor__table';

  toHTML() {
    return createTable();
  }
}
