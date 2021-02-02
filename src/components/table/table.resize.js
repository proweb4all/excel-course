import {$} from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const typeResizer = $resizer.data.resizer
    const sideProp = (typeResizer === 'col') ? 'bottom' : 'right'
    let value
    $resizer.css({
      opacity: 1,
      [sideProp]: '-5000px'
    })
    document.onmousemove = e => {
      if (typeResizer === 'col') {
        const delta = e.pageX - coords.right
        value = (coords.width + delta)
        $resizer.css({right: -delta + 'px'})
      } else {
        const delta = e.pageY - coords.bottom
        value = (coords.height + delta)
        $resizer.css({bottom: -delta + 'px'})
      }
    }
    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
      $resizer.css({
        opacity: 0,
        right: 0,
        bottom: 0
      })
      if (value < 1) {
        value = 1
      }
      if (typeResizer === 'col') {
        $root.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach(el => $(el).css({width: value + 'px'}))
      } else {
        $parent.css({height: value + 'px'})
      }
      resolve({
        id: $parent.data[typeResizer],
        value,
        typeResizer
      })
    }
  })
}