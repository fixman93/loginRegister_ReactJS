import * as constants from './constants'

export const loginUser = (userData) => {
  return {
    type: constants.LOGIN_USER,
    userData
  }
}