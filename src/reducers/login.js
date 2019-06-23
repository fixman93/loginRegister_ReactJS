import * as constants from '../actions/constants'

const login = (state = 0, action) => {
  switch (action.type) {
    case constants.LOGIN_USER:
      return action.userData
    default:
      return state
  }
}

export default login