import React from 'react'

import * as constants from './constants'
import * as actions from './register'

it('create action to register user', () => {
  const data = 'test@test.comnpm '
  const expectedAction = { type: constants.REGISTER_USER, data }

  expect(actions.registerUser(data)).toEqual(expectedAction)
})