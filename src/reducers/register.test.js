import registerReducer from './register'
import * as constants from '../actions/constants'

describe('registerReducer', () => {
  describe('when initializing', () => {

  })
  const data = 'test@test.com'

  it('sets a register', () => {
    expect(registerReducer(undefined, { type: constants.REGISTER_USER, data })).toEqual(data)
  })
})