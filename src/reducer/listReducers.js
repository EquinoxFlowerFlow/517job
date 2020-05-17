const LoginDefault = {
  data: [],
}

export default function List (state = LoginDefault, action) {
  switch(action.type) {
    case 'TECH_LIST':
      console.log(action.payload,123)
      return {...state,data: action.payload.users }
    default:
      return state
  }
}

