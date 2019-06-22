import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { Register } from './Register'

configure({ adapter: new Adapter() })

describe('Render Register Component', () => {
  const mockregisterUser = jest.fn()
  const props = { registerUser: mockregisterUser }
  const register = (shallow(<Register {...props} />))

  it('Register Snapshot', () => {
    expect(register).toMatchSnapshot()
  })

  describe('When typo into email input', () => {
    const email = 'test@test.com'
    beforeEach(() => {
      register.find('#registerEmail').simulate('change', { target: { value: email } })
    })

    it('Update email in `state`', () => {
      expect(register.state().email).toEqual(email)
    })
  })

  describe('When typo into password input', () => {
    const password = '123'
    beforeEach(() => {
      register.find('#registerPassword').simulate('change', { target: { value: password } })
    })

    it('Update password in `state`', () => {
      expect(register.state().password).toEqual(password)
    })
  })
})