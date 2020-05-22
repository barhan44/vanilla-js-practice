import {$} from '@core/utils/dom.util';

export class TableProcessorRootComponent {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRootNode() {
    const $root = $.create('div', 'table-processor');

    this.components.forEach(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRootNode());
  }
}
