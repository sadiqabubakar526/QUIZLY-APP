import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home_Cont from './Components/home/home';
import Quiz_Cont_Easy from './Components/quizCard/quizCardEasy'; //importing Easy Quiz Component
import Quiz_Cont_Int from './Components/quizCard/quizCardInt'; // importing Intermediate Quiz Component
import Quiz_Cont_Diff from './Components/quizCard/quizCardDiff'; //importing Difficult Quiz Component

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch> //creating routes to access components
              <Route path="/" exact component={Home_Cont} />
              <Route path="/easy" exact component={Quiz_Cont_Easy} />
              <Route path="/intermediate" exact component={Quiz_Cont_Int} />
              <Route path="/difficult" exact component={Quiz_Cont_Diff} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
