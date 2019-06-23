import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import { shallow, configure } from 'enzyme'
import Profile from './profile'
configure({ adapter: new Adapter() })

describe('render profile', () => {
  const profile = shallow(<Profile />)
  it('snapshot profile page', () => {
    expect(profile).toMatchSnapshot()
  })
})