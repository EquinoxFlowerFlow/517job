import { post } from '@/utils/request';
import api from '@/services/api';
import { TECH_PAGPING } from '../constants/actionName'


export function pagpingData (options) {
  return {
    type: TECH_PAGPING,
    payload: post(api.paging,options)
  }
}

