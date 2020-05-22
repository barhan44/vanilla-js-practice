import { TableProcessorBaseComponent } from '@core/TableProcessorBase.component';

export class FormulaComponent extends TableProcessorBaseComponent {
  static className = 'table-processor__formula';

  toHTML() {
    return `<div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>`;
  }
}
