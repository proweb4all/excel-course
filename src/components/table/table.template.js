const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index}</div>
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
