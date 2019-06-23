import * as constants from '../actions/constants'
import loginReducer from './login'
import loginReducer2 from './login'


describe('loginReducer', () => {
  const userData = 'test@test.com'

  it('sets a login', () => {
    expect(loginReducer(undefined, { type: constants.LOGIN_USER, userData })).toEqual(userData)
  })

  it('then re-initializing', () => {
    const userData = 0
    expect(loginReducer2(undefined, {})).toEqual(userData)
  })
})