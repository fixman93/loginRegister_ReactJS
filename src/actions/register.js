import * as constants from './constants'

export const registerUser = (data = 'test@test.com') => {
  return {
    type: constants.REGISTER_USER,
    data
  }
}