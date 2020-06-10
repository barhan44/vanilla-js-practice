import { Page } from '@core/Page';
import { $ } from '@core/utils/dom.util';
import { getAllRecordsTable } from '@/pages/dashboard/dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('div', 'db').html(`
      <div class="db__header">
            <h1>Table Processor</h1>
        </div>
        <div class="db__new">
            <div class="db__view">
                <a href="#table-processor/${now}" class="db__create">
                    New Table
                </a>
            </div>
        </div>
        <div class="db__table db__view">
          ${ getAllRecordsTable() }
        </div>
    `);
  }
}
