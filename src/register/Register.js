import React, { Component } from 'react'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="registerEmail">
            <input type="text" id="registerEmail" placeholder="Email" onChange={event => this.setState({ email: event.target.value })} />
          </label>
          <label htmlFor="registerPassword">
            <input type="password" id="registerPassword" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
          </label>
          <button onClick={this.handleRegistration}>Register</button>
        </form>
      </div>
    )
  }
}

export default Register