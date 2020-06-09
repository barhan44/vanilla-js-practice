import { AbstractComponent } from '@core/AbstractComponent';
import { $ } from '@core/utils/dom.util';
import { createToolbar } from '@/components/toolbar/toolbar.template';

export class ToolbarComponent extends AbstractComponent {
  static className = 'table-processor__toolbar';

  constructor($root, options) {
    super($root, { name: 'Toolbar', listeners: ['click'], ...options });
  }

  toHTML() {
    return createToolbar();
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === 'button') {
      console.log($target.data.value);
    }
  }
}
