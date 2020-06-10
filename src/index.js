import './scss/index.scss';
import { Router } from '@core/router/Router';
import { DashboardPage } from '@/pages/Dashboard.page';
import { TableProcessorPage } from '@/pages/TableProcessor.page';

new Router('#app', {
  dashboard: DashboardPage,
  tableProcessor: TableProcessorPage,
});
