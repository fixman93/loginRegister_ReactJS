import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Home from './Home'


configure({ adapter: new Adapter() })

describe('Render Home', () => {
  const mockLogin = jest.fn()
  const props = { loginSubmit: mockLogin }
  const home = shallow(<Home {...props} />)
  it('render app properly', () => {
    expect(home).toMatchSnapshot()
  })

  it('find login component', () => {
    expect(home.find('Login').exists()).toBe(true)
  })



  describe('Update Login `state`', () => {
    afterEach(() => {
      home.setState({ isLogin: true })
    })
    const isLogin = true
    beforeEach(() => {
      home.find('.login-tab').simulate('click')
    })
    it('Set up login state to true', () => {
      expect(home.state().isLogin).toBe(isLogin)
    })
  })

  describe('Register click', () => {
    beforeEach(() => {
      home.setState({ isLogin: false })
      home.find('.register-tab').simulate('click')
    })
    it('Update state `isLogin`', () => {
      expect(home.state().isLogin).toBe(false)
    })
  })
  describe('find register component', () => {
    beforeEach(() => {
      home.setState({ isLogin: false })
    })

    it('Set up login state to false', () => {
      expect(home.state().isLogin).toBe(false)
    })
    it('find register component', () => {
      expect(home.find('Connect(Register)').exists()).toBe(true)
    })
  })

})