export class TableSelection {
  static selectedClassName = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    $el.focus().addClass(TableSelection.selectedClassName);
    this.group.push($el);
    this.current = $el;
  }

  clear() {
    this.group.forEach($el =>
      $el.removeClass(TableSelection.selectedClassName)
    );
    this.group = [];
  }

  selectGroup($group = []) {
    this.clear();

    this.group = $group;
    this.group.forEach($el => $el.addClass(TableSelection.selectedClassName));
  }

  applyStyle(style) {
    this.group.forEach($el => $el.css(style));
  }
}
