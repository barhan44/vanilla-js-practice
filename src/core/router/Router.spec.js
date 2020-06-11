import { Router } from './Router';
import { Page } from '../page/Page';

class MockDashboardPage extends Page {
  getRoot() {
    const root = document.createElement('div');
    root.innerHTML = 'dashboard';
    return root;
  }
}
class MockTableProcessorPage extends Page {}

describe('Router:', () => {
  let router;
  let $root;

  beforeEach(() => {
    $root = document.createElement('div');
    router = new Router($root, {
      dashboard: MockDashboardPage,
      tableProcessor: MockTableProcessorPage,
    });
  });

  test('should be defined', () => {
    expect(router).toBeDefined();
  });

  test('should render Dashboard Page', () => {
    router.changePageHandler();
    expect($root.innerHTML).toBe('<div>dashboard</div>');
  });
});
