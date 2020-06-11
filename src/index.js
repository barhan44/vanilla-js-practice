import './scss/index.scss';
import { Router } from '@core/router/Router';
import { DashboardPage } from '@/pages/dashboard/Dashboard.page';
import { TableProcessorPage } from '@/pages/table-processor/TableProcessor.page';

new Router('#app', {
  dashboard: DashboardPage,
  tableProcessor: TableProcessorPage,
});
