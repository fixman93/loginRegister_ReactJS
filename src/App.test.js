import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import App from './App'


configure({ adapter: new Adapter() })

describe('Render App', () => {
  const app = shallow(<App />)

  it('render app properly', () => {
    expect(app).toMatchSnapshot()
  })
})