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
    let loggedIn = true
    beforeEach(() => {
      form.find('.submit-btn').simulate('click')
    })

    it('User successful logged in', () => {
      expect(form.state().loggedIn).toEqual(loggedIn)
    })
  })
})