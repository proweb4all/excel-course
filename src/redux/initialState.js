import {storage} from '@core/utils';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'someText'}
  currentText: ''

}

export const initialState = storage('js-excel') ? storage('js-excel') : defaultState