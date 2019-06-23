import * as constants from '../actions/constants'

const login = (state = 0, action) => {
  switch (action.type) {
    case constants.LOGIN_USER:
      console.log('aaa', action.data)
      return action.userData
    default:
      return state
  }
}

export default login