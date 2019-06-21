import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import App from './App'


configure({ adapter: new Adapter() })

describe('Render App', () => {
  const mockLogin = jest.fn()
  const props = { loginSubmit: mockLogin }
  const app = shallow(<App {...props} />)
  it('render app properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('find login component', () => {
    expect(app.find('Login').exists()).toBe(true)
  })



  describe('Update Login `state`', () => {
    afterEach(() => {
      app.setState({ isLogin: true })
    })
    const isLogin = true
    beforeEach(() => {
      app.find('.login-tab').simulate('click')
    })
    it('Set up login state to true', () => {
      expect(app.state().isLogin).toBe(isLogin)
    })
  })

  describe('Register click', () => {
    beforeEach(() => {
      app.setState({ isLogin: false })
      app.find('.register-tab').simulate('click')
    })
    it('Update state `isLogin`', () => {
      expect(app.state().isLogin).toBe(false)
    })
  })
  describe('find register component', () => {
    beforeEach(() => {
      app.setState({ isLogin: false })
    })

    it('Set up login state to false', () => {
      expect(app.state().isLogin).toBe(false)
    })
    it('find register component', () => {
      expect(app.find('Register').exists()).toBe(true)
    })
  })

})