import { TableProcessorBaseComponent } from '@core/TableProcessorBase.component';

export class HeaderComponent extends TableProcessorBaseComponent {
  toHTML() {
    return `<h1>Header-Component</h1>`;
  }
}
