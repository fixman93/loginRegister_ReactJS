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

  it('find login/register form', () => {
    expect(app.find('Login').exists()).toBe(true)
  })

})