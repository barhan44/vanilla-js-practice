import { DOMListener } from '@core/DOMListener';

// Let's just imagine that this is an abstract class :)
export class TableProcessorBaseComponent extends DOMListener {
  toHTML() {
    return '';
  }
}
