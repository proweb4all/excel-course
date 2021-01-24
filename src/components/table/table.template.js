const CODES = {
  A: 65,
  Z: 90
}

function createCell(_, ind) {
  return `
    <div class="cell" contenteditable data-col="${ind + 1}"></div>
  `
}

function createCol(col, ind) {
  return `
    <div class="column" data-type="resizable" data-col="${ind + 1}">
      ${col}
      <div class="col-resize" data-resizer="col"></div>
    </div>
  `
}

function createRow(index, content) {
  return `
    <div class="row" data-row="${+index + 1}" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${index ? '<div class="row-resize" data-resizer="row"></div>' : ''}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, ind) {
  return String.fromCharCode(CODES.A + ind)
}

export function createTable(rowsCount = 10) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const colsInfo = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('\n')
  const colsData = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('\n')
  rows.push(createRow('', colsInfo))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, colsData))
  }
  return rows.join('\n')
}
