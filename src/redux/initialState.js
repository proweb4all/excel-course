import {storage} from '@core/utils';
import {defaultStyles, defaultTitle} from '../constants';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'someText'}
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles
}
const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export const initialState = storage('js-excel') ? normalize(storage('js-excel')) : defaultState