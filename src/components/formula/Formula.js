import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
      ...options
    })
  }
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(event) {
    const text = event.target.textContent.trim()
    this.emitter.emit('input formula', text)
    // console.log('Formula: onInput', event.target.textContent.trim())
  }
  onClick(event) {
    // console.log('Formula: onClick', event)
  }
}
