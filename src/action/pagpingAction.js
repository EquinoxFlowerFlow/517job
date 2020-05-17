import { post } from '@/utils/request';
import api from '@/services/api';

export function pagpingData (options) {
  return {
    type: 'TECH_PAGPING',
    payload: post(api.paging,options)
  }
}

