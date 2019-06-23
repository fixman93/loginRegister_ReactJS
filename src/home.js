import React, { Component } from 'react'
import Login from './Login'
import Register from './register/Register'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
    this.navMenu = this.navMenu.bind(this)
  }

  navMenu(nav) {
    if (nav === 'login') {
      this.setState({
        isLogin: true
      })
    }
    else {
      this.setState({
        isLogin: false
      })
    }
  }
  render() {
    const { isLogin } = this.state
    return (
      <div className="App">

        <div className="nav">
          <ul>
            <li className={isLogin ? 'login-tab active' : 'login-tab'} onClick={() => this.navMenu('login')}>Login</li>
            <li className={isLogin ? 'register-tab ' : 'register-tab active'} onClick={() => this.navMenu('register')}>Register</li>
          </ul>
        </div>
        {isLogin ? <Login /> : <Register />}
      </div>
    )
  }
}

export default Home;
