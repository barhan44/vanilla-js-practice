import { TableProcessorBaseComponent } from '@core/TableProcessorBase.component';

export class HeaderComponent extends TableProcessorBaseComponent {
  static className = 'table-processor__header';

  toHTML() {
    return `<input type="text" class="input" value="New table" />
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>`;
  }
}
