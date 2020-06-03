import { $ } from '@core/utils/dom.util';
import { Emitter } from '@core/Emitter';

export class RootComponent {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
    this.store = options.store;
    this.emitter = new Emitter();
  }

  getRootNode() {
    const $root = $.create('div', 'root');

    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, componentOptions);
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

  destroy() {
    this.components.forEach(component => component.destroy());
  }
}
