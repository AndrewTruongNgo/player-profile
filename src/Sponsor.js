import React, { Component } from 'react';
import './App.css';

class Sponsor extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td><button className="sponsor-button">Sponsor Token</button></td>
            </tr>
            <tr>
              <td>
              <div>1 Token</div>
              <div>Two free tickets per season</div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default Sponsor;
