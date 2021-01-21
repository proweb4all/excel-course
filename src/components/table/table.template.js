const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable>0</div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}
function createRow(content, info) {
  return `
    <div class="row">
      <div class="row-info">${info}</div>
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
      .fill('1')
      .map((_) => '0')
      .map(createCol)
      .join('\n')
  rows.push(createRow(colsInfo, ''))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(colsData, '1'))
  }
  return rows.join('\n')
}
