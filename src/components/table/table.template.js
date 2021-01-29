const CODES = {
  A: 65,
  Z: 90
}

function createCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}" 
        data-id="${row}:${col}"
        data-type="cell"
      ></div>
    `
  }
}

function createCol(col, ind) {
  return `
    <div class="column" data-type="resizable" data-col="${ind}">
      ${col}
      <div class="col-resize" data-resizer="col"></div>
    </div>
  `
}

function createRow(index, content) {
  return `
    <div class="row" data-row="${index}" data-type="resizable">
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
  rows.push(createRow('', colsInfo))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        // .map((_, col) => createCell(row, col))
        .map(createCell(row))
        .join('\n')
    rows.push(createRow(row + 1, cells))
  }
  return rows.join('\n')
}
