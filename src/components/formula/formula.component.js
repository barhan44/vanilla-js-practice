import { AbstractComponent } from '@core/AbstractComponent';

export class FormulaComponent extends AbstractComponent {
  static className = 'table-processor__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  toHTML() {
    return `<div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log('on input from formula ', event);
  }
}
