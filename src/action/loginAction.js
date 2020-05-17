import { post } from '@/utils/request';
import api from '@/services/api';

export function loginUsername (options) {
  return {
    type: 'TECH_LOGIN',
    payload: options
  }
}

