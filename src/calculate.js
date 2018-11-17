import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/**
 * This is a statefull component which contains a form. it takes user input and displays score when button is clicked
 */
class calcForm extends Component {
  constructor(props) {
    super(props);
    //state.input saves user input while state.score holds the score
    this.state = {
      input: "",
      score: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Fired when 'Calculate' button is pressed.
   * contains algorithm to calculate score. follow comments for step by step guide
   */
  handleFormSubmit(event) {
    //The first step is to split the input of type 'String' into an array of 'Char's
    var frames = this.state.input.trim().split("");

    //The second Step is to translate the array of 'Char's into actual int values which represent rolls
    var rolls = [];
    for (var i = 0; i < frames.length; i++) {
      if (frames[i] === "X") {
        rolls.push(10);
      } else if (frames[i] === "/") {
        rolls.push(10 - rolls[i - 1]);
      } else if (frames[i] === "-") {
        rolls.push(0);
      } else {
        rolls.push(frames[i]);
      }
    }
    /* the third step is to itterate through the rolls and add the scores according the scoring logic
      The scoring logic requires us to 
    */
    var score = 0;

    for (var i = 0; i < frames.length; i++) {
      //if the roll is a bonus round and a strike
      if (frames[i] === "X" && i === frames.length - 3) {
        score += 10;
      }
      //if the roll is a strike but not a bonus round
      else if (
        frames[i] === "X" &&
        frames[i + 1] != null &&
        frames[i + 2] != null
      ) {
        score +=
          parseInt(rolls[i], 10) +
          parseInt(rolls[i + 1], 10) +
          parseInt(rolls[i + 2], 10);
      }
      //if the roll is a spare and a bonus round
      else if (frames[i] === "/" && i === frames.length - 2) {
        score += rolls[i];
      }
      //if the roll is a spare but not a bonus round
      else if (frames[i] === "/" && i != 0 && frames[i + 1] != null) {
        score += parseInt(rolls[i], 10) + parseInt(rolls[i + 1], 10);
      }
      //if the roll is neither a strike nor a spare (but may or may not be a bonus round)
      else {
        score += parseInt(rolls[i], 10);
      }
    }
    //after completing the sumation it will add it to state.score (whcih is bound to div#score )
    this.setState({ score: score });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  } //saves user input to state.input
  render() {
    return (
      <div>
        <div id="textbox-wrap">
          <form id="textbox" onSubmit={this.handleFormSubmit}>
            <input type="text" onChange={this.handleChange} />
            <input type="submit" value="Calculate" id="button" />
          </form>
        </div>
        <div id="score">Score: {this.state.score}</div>
      </div>
    );
  }
}
export default calcForm;
