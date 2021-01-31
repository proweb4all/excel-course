const CODES = {
  A: 65,
  Z: 90
}
const DEFAULT_WIDTH = 100
const DEFAULT_HEIGHT = 24

function getWidth(state, index) {
  return (state && state[index]) ? state[index] + 'px' : DEFAULT_WIDTH + 'px'
}
function getHeight(state, index) {
  return (state && state[index]) ? state[index] + 'px' : DEFAULT_HEIGHT + 'px'
}

function createCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`
    const data = state.dataState[id]
    return `
      <div 
        class="cell" 
        style="width: ${getWidth(state.colState, col)}"
        contenteditable 
        data-col="${col}" 
        data-id="${id}"
        data-type="cell"
      >${data || ''}</div>
    `
  }
}

function createCol({col, index, width}) {
  // console.log('createCol:', col, index, width)
  return `
    <div class="column" style="width: ${width}" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resizer="col"></div>
    </div>
  `
}

function createRow(index, content, rowState = {}) {
  const height = getHeight(rowState, index)
  return `
    <div class="row" style="height: ${height}" data-row="${index}" data-type="resizable">
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

function widthFrom(state) {
  return function(col, index) {
    // console.log('widthFrom: ', index, getWidth(state.colState, index))
    return {
      col, index, width: getWidth(state.colState, index)
    }
  }
}

export function createTable(rowsCount = 10, state = {}) {
  // console.log('tableState', state)
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const colsInfo = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(widthFrom(state))
      .map(createCol)
      // .map((col, index) => {
      //   const width = getWidth(state.colState, index)
      //   console.log(col, index, width)
      //   return createCol(col, index, width)
      // })
      .join('\n')
  rows.push(createRow('', colsInfo))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        // .map((_, col) => createCell(row, col))
        .map(createCell(state, row))
        .join('\n')
    rows.push(createRow(row + 1, cells, state.rowState))
  }
  return rows.join('\n')
}
