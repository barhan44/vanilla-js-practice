import { Page } from '@core/Page';
import { $ } from '@core/utils/dom.util';

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
      <div class="db__header">
            <h1>Table Processor</h1>
        </div>
        <div class="db__new">
            <div class="db__view">
                <a href="#" class="db__create">
                    New Table
                </a>
            </div>
        </div>
        <div class="db__table db__view">
            <div class="db__list-header">
                <span>Name</span>
                <span>Opening date</span>
            </div>

            <ul class="db__list">
                <li class="db__record">
                    <a href="#">First Table</a>
                    <strong>01.01.2020</strong>
                </li>
                <li class="db__record">
                    <a href="#">Second Table</a>
                    <strong>01.02.2020</strong>
                </li>
                <li class="db__record">
                    <a href="#">Third Table</a>
                    <strong>01.03.2020</strong>
                </li>
            </ul>
        </div>
    `);
  }
}
