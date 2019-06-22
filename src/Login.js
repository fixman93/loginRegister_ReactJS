import React, { Component } from 'react'

export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      email: '',
      password: ''
    }
  }

  loginSubmit = (e) => {
    const { email, password } = this.state
    if (email !== '' && password !== '') {
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
  render() {
    const { loggedIn } = this.state
    return (
      <div>
        <form>
          <label>
            <input type='email' className='email-input' placeholder='Email' onChange={event => this.setState({ email: event.target.value })} />
          </label>
          <label>
            <input type='password' className='password-input' placeholder='Password' onChange={event => this.setState({ password: event.target.value })} />
          </label>
          <a className='submit-btn' onClick={this.loginSubmit}>Login</a>
          {loggedIn ? <div>Logged In</div> : <div>Logged Out</div>}
        </form>
      </div>
    )
  }
}

export default Login