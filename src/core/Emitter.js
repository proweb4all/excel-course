export class Emitter {
  constructor() {
    this.listeners = {}
  }
  // Уведомляем слушателей
  emit(event, ...args) {
    if (Array.isArray(this.listeners[event])) {
      this.listeners[event].forEach(listener => {
        listener(...args)
        return true
      })
    }
    return false
  }
  // Подписываемся на уведомления, добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// // Test
// const emitter = new Emitter()
// const unsub = emitter.subscribe('Yury', data => console.log('Sub: ', data))
// emitter.emit('Yury', 111)
// setTimeout(() => {
//   emitter.emit('Yury', 222)
// }, 2000)
// setTimeout(() => {
//   unsub()
//   console.log('Unsub')
// }, 3000)
// setTimeout(() => {
//   emitter.emit('Yury', 51)
// }, 4000)