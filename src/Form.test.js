import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Form from './Form'


configure({ adapter: new Adapter() })

describe('Render App', () => {
  const form = shallow(<Form />)
  it('render Form properly', () => {
    expect(form).toMatchSnapshot()
  })

  it('Initializea a email and password in `state`', () => {
    expect(form.state()).toEqual({ email: '', password: '', loggedIn: false })
  })
  describe('When the user click submit form', () => {
    let loggedIn = false
    beforeEach(() => {
      form.find('.submit-btn').simulate('click')
    })

    it('User successful logged in', () => {
      expect(form.state().loggedIn).toEqual(loggedIn)
    })
  })

  describe('When type into email input', () => {
    const email = 'test@test.com'
    beforeEach(() => {
      form.find('.email-input').simulate('change', { target: { value: email } })
    })

    it('Update the email in `state`', () => {
      expect(form.state().email).toEqual(email)
    })
  })

  describe('When type into password input', () => {
    const password = '123'
    beforeEach(() => {
      form.find('.password-input').simulate('change', { target: { value: password } })
    })

    it('Update the password in `state`', () => {
      expect(form.state().password).toEqual(password)
    })
  })
})