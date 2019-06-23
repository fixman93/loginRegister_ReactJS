import React from 'react'

import * as constants from './constants'
import * as actions from './login'

it('create action to login user', () => {
  const userData = 'test@test.com'
  const expectedAction = { type: constants.LOGIN_USER, userData }
  expect(actions.loginUser(userData)).toEqual(expectedAction)
})
