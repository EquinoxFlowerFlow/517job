const LoginDefault = {
  data: [],
  count: 0
}

export default function Pagping (state = LoginDefault, action) {
  switch(action.type) {
    case 'TECH_PAGPING':
      return {...state,data: action.payload.result.list, count: action.payload.result.count }
    default:
      return state
  }
}


