import { StateComponent } from '@core/StateComponent';
import { $ } from '@core/utils/dom.util';
import { createToolbar } from '@/components/toolbar/toolbar.template';

export class ToolbarComponent extends StateComponent {
  static className = 'table-processor__toolbar';

  constructor($root, options) {
    super($root, { name: 'Toolbar', listeners: ['click'], ...options });
  }

  prepare() {
    const initialState = {
      textAlign: 'left',
      fontWeight: 'normal',
      textDecoration: 'none',
      fontStyle: 'normal',
    };
    this.initState(initialState);
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value);
      const key = Object.keys(value)[0];
      this.setState({ [key]: value[key] });
    }
  }
}
