import * as constants from './constants'

export const registerUser = (data) => {
  console.log('action', data)
  return {
    type: constants.REGISTER_USER,
    data
  }
}