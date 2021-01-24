import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'
  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }
  toHTML() {
    return createTable(16)
  }
  onMousedown(event) {
    if (event.target.dataset.resizer) {
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
        if (value < 0) {
          value = 0
        }
        if (typeResizer === 'col') {
          this.$root.findAll(`[data-col="${$parent.data.col}"]`)
              .forEach(el => $(el).css({width: value + 'px'}))
        } else {
          $parent.css({height: value + 'px'})
        }
      }
    }
  }
}
