import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      email: '',
      password: '',
      setup: false
    }
  }

  loginSubmit = (e) => {
    let user
    const { email, password } = this.state
    user = JSON.parse(localStorage.getItem('user'))
    console.log('user', user)
    if (user && user.email !== null) {
      if (email === user.email && password === user.password) {
        this.setState({
          loggedIn: true
        })
      }
      else {
        this.setState({
          loggedIn: false
        })
      }
    }

  }
  render() {
    const { loggedIn } = this.state
    return (
      <div className='form'>
        <span>Login</span>
        <br /><br />
        <form>
          <label>
            <input type='email' className='email-input' placeholder='Email' onChange={event => this.setState({ email: event.target.value })} />
          </label>
          <label>
            <input type='password' className='password-input' placeholder='Password' onChange={event => this.setState({ password: event.target.value })} />
          </label>
          <a className='submit-btn' onClick={this.loginSubmit}>Login</a><br />
          {loggedIn ? <Link to='/profile'>Profile</Link> : <div>Sign In</div>}
        </form>
      </div>
    )
  }
}

export default Login
