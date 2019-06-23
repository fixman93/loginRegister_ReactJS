import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/register'
import { Link } from 'react-router-dom'


export class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleRegistration = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    if (email !== '' && password !== '') {
      await this.props.registerUser(this.state)
      console.log('data', this.props.register)
      localStorage.setItem('user', JSON.stringify(this.props.register))
      localStorage.setItem('token', email + 'fdasfawr34r34rwadfdas')
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
          <Link to='/profile' >Profile</Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    register: state.register
  })
}
export default connect(mapStateToProps, { registerUser })(Register)