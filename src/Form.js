import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      email: '',
      password: ''
    }
  }

  loginSubmit = (e) => {
    this.setState({
      loggedIn: true
    })
  }
  render() {
    return (
      <div>
        <form>
          <label>
            <input type='email' placeholder='Email' onChange={event => this.setState({ email: event.target.value })} />
          </label>
          <label>
            <input type='password' placeholder='Password' onChange={event => this.setState({ password: event.target.value })} />
          </label>
          <button className='submit-btn' onClick={this.loginSubmit}>Login</button>
        </form>
      </div>
    )
  }
}

export default Form