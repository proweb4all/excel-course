import {range} from '@core/utils';

export function shouldResize(event) {
  return event.target.dataset.resizer
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix($current, $target) {
  const startCell = $current.id(true)
  const endCell = $target.id(true)
  const rows = range(startCell.row, endCell.row)
  const cols = range(startCell.col, endCell.col)
  return rows.reduce((acc, row) => {
    cols.forEach(col => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector(key, {row, col}) {
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowUp':
      (row > 0) ? row-- : row
      break
    case 'ArrowLeft':
      (col > 0) ? col-- : col
      break
  }
  return `[data-id="${row}:${col}"]`
}