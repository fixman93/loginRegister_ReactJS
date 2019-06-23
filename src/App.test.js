import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import { shallow, configure } from 'enzyme'
import App from './App'
configure({ adapter: new Adapter() })

describe('render App', () => {
  const app = (shallow(<App />))
  it('snapshot app page', () => {
    expect(app).toMatchSnapshot()
  })
})