export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }
  clear() {
    this.group.forEach($cell => $cell.removeClass(TableSelection.className))
    this.group = []
    this.current = null
  }
  get selectedIds() {
    return this.group.map($el => $el.id())
  }
  select($el) {
    this.clear()
    this.group.push($el)
    $el.focus().addClass(TableSelection.className)
    this.current = $el
  }
  selectAdd($el) {
    this.group.push($el)
    $el.focus().addClass(TableSelection.className)
    this.current = $el
  }
  selectGroup($el, $cells = []) {
    $cells.forEach($elem => {
      this.group.push($elem)
      $elem.addClass(TableSelection.className)
    })
    $el.focus()
    this.current = $el
  }
  applyStyle(style) {
    this.group.forEach($el => $el.css(style))
  }
}