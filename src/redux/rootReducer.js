import {TABLE_RESIZE, CHANGE_TEXT} from './types';

export function rootReducer(state, action) {
  let prevState
  let field
  console.log('Action:', action)
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.typeResizer === 'col' ? 'colState' : 'rowState'
      prevState = state[field] || {}
      prevState[action.data.id] = action.data.value
      return {...state, [field]: prevState}
    case CHANGE_TEXT:
      prevState = state['dataState'] || {}
      prevState[action.data.id] = action.data.value
      return {...state, currentText: action.data.value, dataState: prevState}
    default: return state
  }
}