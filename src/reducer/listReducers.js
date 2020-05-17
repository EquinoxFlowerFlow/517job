import { TECH_LIST } from '@/constants/actionName'

const LoginDefault = {
  data: [],
}

export default function List (state = LoginDefault, action) {
  switch(action.type) {
    case TECH_LIST:
      return {...state,data: action.payload.users }
    default:
      return state
  }
}

