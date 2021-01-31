import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.store = options.store
    this.unsubs = []
    this.storeSub = null
    this.prepare()
  }
  // Настройка компонета до init()
  prepare() {}
  // Возврат шаблона компонента
  toHTML() {
    return ''
  }
  // Уведомление слушателей о событиях
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписка на событие
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubs.push(unsub)
  }
  $dispatch(action) {
    this.store.dispatch(action)
  }
  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn)
  }
  // Инициализация компонента, добавление слушателей
  init() {
    this.initDOMListeners()
  }
  // Действия при удалении компонента, удаление слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubs.forEach(unsub => unsub())
    this.storeSub.unsubscribe()
  }

}
