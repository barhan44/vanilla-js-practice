import { AbstractComponent } from '@core/AbstractComponent';
import { createTable } from '@/components/table/table.template';
import { resizeHandler } from '@/components/table/table.resize';
import { shouldResize } from '@/components/table/table.helpers';

export class TableComponent extends AbstractComponent {
  static className = 'table-processor__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
