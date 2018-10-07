import React, { Component } from 'react';
import Sponsor from './Sponsor.js'
import './App.css';
import player from './football.jpg'
import SignUp from './SignUp.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signUpClicked: false,
    }
    this.signUpClick = this.signUpClick.bind(this);
  }

  signUpClick () {
    this.setState({
      signUpClicked: !this.state.signUpClicked,
    })
  }

  render() {
    const signUpClicked = this.state.signUpClicked;
    return (
      <div className="App">
        {!signUpClicked ? (
          <div>
            <button className="sign-up-button" onClick={this.signUpClick}>Sign Up</button>
            <div className="App-header">
              <header className="title-header">
                Arena World
              </header>
            </div>
            <div className="player-profile">
              <img src={player} className="player-image" />
              <div className="player-bio">
                <div className="player-name">
                  Lance Smith
                </div>
                <div className="player-position">#22 RB</div>
                <table className="tablePlayer" align="center">
                  <tbody>
                    <tr>
                      <td><b>Height: </b>6-1</td>
                      <td><b>Weight: </b>150</td>
                      <td><b>Age:</b>16</td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
                <div className="school">
                  <b>High School:</b>Liberty HS
                </div>
                <table className="tableStats" align="center">
                  <thead>
                    <tr>
                      <td>CAR</td>
                      <td>YDS</td>
                      <td>AVG</td>
                      <td>TDS</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>25</td>
                      <td>120</td>
                      <td>3.6</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Sponsor/>
            </div>
          </div>
        ) : (
          <SignUp signUpClick={this.signUpClick}/>
        )}
        </div>
      );
    }
  }

export default App;
