import { storage } from '@core/utils/common.util';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
};

export const initialState = storage('table-processor-state')
  ? storage('table-processor-state')
  : defaultState;
