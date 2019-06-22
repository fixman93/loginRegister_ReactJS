import registerReducer from './register'
import registerReducer2 from './register'
import * as constants from '../actions/constants'

describe('registerReducer', () => {

  const data = 'test@test.com'

  it('sets a register', () => {
    expect(registerReducer(undefined, { type: constants.REGISTER_USER, data })).toEqual(data)
  })

  describe('then re-initializing', () => {
    const data = 0
    it('reads the balance from cookies', () => {
      expect(registerReducer2(undefined, {})).toEqual(data)
    })
  })
})