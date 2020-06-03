import { TABLE_RESIZE } from '@/store/action.types';

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}
