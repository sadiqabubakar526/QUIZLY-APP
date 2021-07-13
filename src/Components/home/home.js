import React, {Component} from 'react';
import Home_Card from '../homeCard/homeCard';  //importing Difficulty Cards
import React_Card from '../reactCard/reactCard'; //importing React Header Component
import './home.css'

class home extends Component {

  render() {
    return (
      <div>
        <React_Card />
          <div className="diff_cards">
            <Home_Card diff={"Easy"} redirect={"/easy"} />
            <Home_Card diff={"Intermediate"} redirect={"/intermediate"} />
            <Home_Card diff={"Difficult"} redirect={"/difficult"} />
          </div>
      </div>
    );
  }
}

export default home;
