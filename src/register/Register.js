import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/register'


export class Register extends Component {
  // componentDidMount = async () => {
  //   console.log('props', this.props)
  //   await this.props.registerUser()
  // }
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null
    }
  }

  handleRegistration = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    if (email !== null && password !== null) {
      this.props.registerUser(this.state)
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
          <button className="register-btn" onClick={this.handleRegistration}>Register</button>
        </form>
      </div>
    )
  }
}


export default connect(null, { registerUser })(Register)