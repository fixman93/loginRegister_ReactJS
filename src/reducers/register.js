import * as constants from '../actions/constants'


const register = (state = 0, action) => {
  switch (action.type) {
    case constants.REGISTER_USER:
      return action.data
    default:
      return state
  }
}

export default register