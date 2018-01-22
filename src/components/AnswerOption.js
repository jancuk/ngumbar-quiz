import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnswerOption extends Component {

  render(){
    return(
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={this.props.answerType === this.props.answer}
          id={this.props.answerType}
          answer={this.props.questionId}
          value={this.props.answerType}
          onChange={this.props.onAnswerSelected}
          onClick={this.props.onClickSelected}
        />
        <label className="radioCustomLabel" htmlFor={this.props.answerType}>
          {this.props.answerContent}
        </label>
      </li>
    );
  }
  
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onClickSelected: PropTypes.func.isRequired
};

export default AnswerOption;