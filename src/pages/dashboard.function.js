import {storage} from '@core/utils';

function toHTML(key) {
  const model = storage(key)
  const id = key.split(':')[1]
  return `
    <li class="db__record">
      <a href="#excel/${id}">${model.title}</a>
      <i>
        ${new Date(model.openedDate).toLocaleDateString()}
        ${new Date(model.openedDate).toLocaleTimeString()}
      </i>
    </li>
  `
}
// excel:123456
function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key.includes('excel')) {
      keys.push(key)
    }
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  if (!keys.length) {
    return `<p>Пока еще нет ни одной таблицы</p>`
  } else {
    return `
      <div class="db__list_header">
        <span>Название</span>
        <span>Дата открытия</span>
      </div>
      <ul class="db__list">
        ${keys.map(toHTML).join('\n')}
      </ul>
    `
  }
}