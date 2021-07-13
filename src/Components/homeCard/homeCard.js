import React, {Component} from 'react';
import './homeCard.css'

class Home_Card extends Component {

  //Template of Difficulty Selection Card Displayed oh home page

  render() {
    return (
      <div className="diff_cont">
          <div className="card">
            <p className="head">{this.props.diff}</p>
            <p className="content" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
              <a href={this.props.redirect} className="btn">Play Now!</a>
          </div>
      </div>
    );
  }
}

export default Home_Card;
