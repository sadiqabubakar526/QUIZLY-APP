import React, {Component} from 'react';
import React_Card from '../reactCard/reactCard'; //importing React Header Component
import './quizCard.css'
import data from '../../assets/data.json'  //importing questions from json file

class Quiz_Card_Easy extends Component {

  constructor() {
    super()
    this.state={
      selectedOption: null, //sets Radio Option to null in the beginning
      index:0, //state to access question
      key:1, //state to access quiz options
      score:0, //state for storing score
      seconds: 60, //timer state
      pause: false, //state to add delay
      countdownStatus: false,  //countdown status
      answer_key: false, //state to display answer
    }
  }

  componentDidMount() {
    this.startCountdown();  //starts countdown when quiz is started.
  }

  // function to add delay to display answer after a wrong answer is detected with delay of 2 sec.
  delayState = () => {
        setTimeout(() => {
          if(this.state.pause === true)
            {
              this.setState({answer_key: false})
              this.setState({index: this.state.index + 1});
              this.setState({pause: false});
            }
        }, 2000);
    }

  // countdown function
  startCountdown = () =>{
      this.interval = setInterval(() => {
        //when timer ends
        if(this.state.seconds === 0 && this.state.countdownStatus === true)
          {
            this.setState({index:5});
          }
        //when timer is running
        else 
          {
            this.setState(prevState => ({seconds: prevState.seconds-1}));
            this.setState({countdownStatus: true});}
      }, 1000);
    }

  //handle radio button when any option is selected
  handleOptionChange = changeEvent => {
    this.setState({selectedOption: changeEvent.target.value});
  };

  //function to execute when next button is clicked.
  handleFormSubmit = (formSubmitEvent,prevState) => {
    formSubmitEvent.preventDefault();

    //when answer matched the database
    if(this.state.selectedOption === data.easy[this.state.index].correct)
    {
      console.log(this.state.selectedOption);
      console.log(data.easy[this.state.index].correct)
      if(this.state.index < 5)
      {
        this.setState({answer_key: false})
        this.setState({selectedOption:null});
        this.setState({score: this.state.score + 5});
        this.setState({index: this.state.index + 1});
      }
    }

    //when answer doesn't matches the database
    else
    {
      console.log(this.state.selectedOption);
      console.log(data.easy[this.state.index].correct)
      if(this.state.index < 5)
      {
        this.setState({answer_key: true})
        this.setState({selectedOption:null});
        this.setState({pause: true});
        this.delayState();
      }
    }
  };

  render() { 
    const answer_key = this.state.answer_key;
    if(this.state.index < 5 ) 
    {
      return (
        <div>
            <React_Card />

            {/* Component to display score and countdown */}
            <div className="timer">
              <p className="game_value">Score : {this.state.score}</p>
              <p className="game_value">Time Left : {this.state.seconds} sec</p>
            </div>

          {/* Component to display questions */}
            <div className="ques_cont">
              <p className="ques_index"> Question {parseInt(this.state.index)+1}: </p>
              <p className="ques"> {data.easy[this.state.index].question} </p>
              <form className="form" onSubmit={this.handleFormSubmit}>
                <div className="radio_flex">
                  {/* Displaying Options */}
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)} 
                                    checked={this.state.selectedOption === '1'} 
                                    onChange={this.handleOptionChange} />
                        {data.easy[this.state.index].options[0].answer}
                      </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)+1} 
                                    checked={this.state.selectedOption === '2'} 
                                    onChange={this.handleOptionChange} />
                      {data.easy[this.state.index].options[1].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)+2} 
                                    checked={this.state.selectedOption === '3'} 
                                    onChange={this.handleOptionChange} />
                      {data.easy[this.state.index].options[2].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)+3}
                                    checked={this.state.selectedOption === '4'} 
                                    onChange={this.handleOptionChange} />
                      {data.easy[this.state.index].options[3].answer}
                    </label>
                  </div>
                </div>
                <button className="submit_btn" type="submit">Next >></button>

                {/* Display answer when the user gets it wrong. */}
                
                {answer_key ? (
                  <p className="answer_key">Correct Answer is : {data.easy[this.state.index].options[data.easy[this.state.index].correct-1].answer} </p>
                ) : (
                  <div />
                )}
              </form>
            </div>
        </div>
      );
    }
    else
    {/* Displaying Score & Result when the quiz is finished */}
    {
      if(this.state.score === 0){
        return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Very Very Poor in General Knowledge</p>
                <a className="play_again" href="/">
                    Play Again ?
                </a>
              </div>
            </div>
          );
      }
          
      else if(this.state.score === 5) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Very Poor in General Knowledge</p>
                <a className="play_again" href="/">
                    Play Again ?
                </a>
              </div>
            </div>
          );
      }
            
      else if(this.state.score === 10) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Poor in General Knowledge</p>
                <a className="play_again" href="/">
                    Play Again ?
                </a>
              </div>
            </div>
          );
      }
            
      else if(this.state.score === 15) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Average in General Knowledge</p>
                <a className="play_again" href="/">
                    Play Again ?
                </a>
              </div>
            </div>
          );
      }
              
      else if(this.state.score === 20) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Good in General Knowledge</p>
                <a className="play_again" href="/">
                    Play Again ?
                </a>
              </div>
            </div>
          );
      }

      else if(this.state.score === 25) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Very Good in General Knowledge</p>
                <a className="play_again" href="/">
                    Play Again ?
                </a>
              </div>
            </div>
          );
      }
    }
  }
}

export default Quiz_Card_Easy;
