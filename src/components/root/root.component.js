import {$} from '@core/utils/dom.util';

export class RootComponent {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRootNode() {
    const $root = $.create('div', 'root');

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRootNode());
    this.components.forEach(component => component.init());
  }
}
