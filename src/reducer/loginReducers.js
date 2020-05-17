import { TECH_LOGIN } from '@/constants/actionName'

const LoginDefault = {
  username: '',
}

export default function Login (state = LoginDefault, action) {
  switch(action.type) {
    case TECH_LOGIN:
      return {...state,username: action.payload.username }
    default:
      return state
  }
}


