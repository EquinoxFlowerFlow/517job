import { get } from '@/utils/request';
import api from '@/services/api';
import { TECH_LIST } from '../constants/actionName'


export function listData (options) {
  return {
    type: TECH_LIST,
    payload: get(api.search)
  }
}