import { storage } from '@core/utils/common.util';

const defaultState = {
  rowState: {},
  colState: {},
};

export const initialState = storage('table-processor-state')
  ? storage('table-processor-state')
  : defaultState;
