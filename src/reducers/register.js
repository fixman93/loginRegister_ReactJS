import * as constants from '../actions/constants'


const register = (state = 0, action) => {
  switch (action.type) {
    case constants.REGISTER_USER:
      console.log('aaa', action.data)
      return action.data
    default:
      return state
  }
}

export default register