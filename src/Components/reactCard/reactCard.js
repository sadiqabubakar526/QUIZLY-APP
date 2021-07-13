import React, {Component} from 'react';
import logo from '../../logo.svg';
import './reactCard.css';

class reactCard extends Component {

  //React Header displayed at the top of each page

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <a href="/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <p>
              <code>QUIZLY</code>
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default reactCard;
