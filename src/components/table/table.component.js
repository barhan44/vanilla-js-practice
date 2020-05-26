import { AbstractComponent } from '@core/AbstractComponent';

export class TableComponent extends AbstractComponent {
  static className = 'table-processor__table';

  toHTML() {
    return `<div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    1
                </div>
                <div class="row-data">
                    <div class="cell selected" contenteditable>A1</div>
                    <div class="cell" contenteditable>B1</div>
                    <div class="cell" contenteditable>C1</div>
                </div>
            </div>
        </div>`;
  }
}
