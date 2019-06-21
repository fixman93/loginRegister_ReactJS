import React, { Component } from 'react';
import Login from './Login'
import Register from './register/Register'
import './App.css';

class App extends Component {

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
            <li className='login-tab' onClick={() => this.navMenu('login')}>Login</li>
            <li className='register-tab' onClick={() => this.navMenu('register')}>Register</li>
          </ul>
        </div>
        {isLogin ? <Login /> : <Register />}
      </div>
    )
  }
}

export default App;
