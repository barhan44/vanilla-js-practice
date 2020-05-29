import { $ } from '@core/utils/dom.util';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  const sideProp = type === 'col' ? 'bottom' : 'right';

  let width;
  let height;

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px',
  });

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - coords.right;
      width = coords.width + delta;
      $resizer.css({ right: `${-delta}px` });
    } else {
      const delta = e.pageY - coords.bottom;
      height = coords.height + delta;
      $resizer.css({ bottom: `${-delta}px` });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (type === 'col') {
      $parent.css({ width });
      $root
        .findAll(`[data-col="${$parent.data.col}"]`)
        .forEach(el => (el.style.width = `${width}px`));
    } else {
      $parent.css({ height: `${height}px` });
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });
  };
}
