import { get } from '@/utils/request';
import api from '@/services/api';

export function listData (options) {
  return {
    type: 'TECH_LIST',
    payload: get(api.search)
  }
}