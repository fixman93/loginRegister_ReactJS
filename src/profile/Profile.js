import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
class Profile extends Component {
  render() {
    let token = localStorage.getItem('token')
    console.log('token', token)
    if (!token) {
      return <Redirect to='/' />
    }
    else {
      return (
        <div>
          Profile<br />
          <Link to='/'>Login/Register Page</Link>
        </div>
      )
    }
  }
}

export default Profile
