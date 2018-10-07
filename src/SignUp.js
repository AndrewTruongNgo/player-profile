import React, { Component } from 'react';
import './App.css';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="close-icon">
          <i class="fas fa-times" onClick={this.props.signUpClick}></i>
        </div>
        <h1 className="sign-up-title">Create Account today</h1>
        <div className="username-input-container">
          <input className="username-input" placeholder="Username"></input>
        </div>
        <div className="username-input-container">
          <input className="username-input" placeholder="Email"></input>
        </div>
        <div className="username-input-container">
          <input className="username-input" placeholder="Password"></input>
        </div>
        <div className="username-input-container">
          <input className="username-input" placeholder="ETH address"></input>
        </div>
        <div className="center-item">
          <button className="submit-button" onClick={this.props.signUpClick}>Submit</button>
        </div>
      </div>
    )
  }

}

export default SignUp;
