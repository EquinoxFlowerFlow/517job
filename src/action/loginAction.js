import { TECH_LOGIN } from '@/constants/actionName'


export function loginUsername (options) {
  return {
    type: TECH_LOGIN,
    payload: options
  }
}

