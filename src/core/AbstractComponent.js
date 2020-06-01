import { DOMListener } from '@core/DOMListener';

// Let's just imagine that this is an abstract class :)
export class AbstractComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.forUnsubscribe = [];

    this.prepare();
  }

  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.forUnsubscribe.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.forUnsubscribe.forEach(unsub => unsub());
  }

  prepare() {}
}
