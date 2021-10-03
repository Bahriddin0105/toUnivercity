/** @format */

import React, { Component } from "react";
import { Container } from "./style";
import Question from "./question";
import { Link } from "react-router-dom";
import { getQuestions } from "../../cerver/face-server";

export default class Test extends Component {
  state = {
    tests: [],
    categorys: [],
    transform: 0,
  };

  componentDidMount() {
    const tests = getQuestions();
    this.setState({
      tests,
    });
  }

  nextQuestion = () => {
    let transform = this.state.transform;
    transform -= 680;
    document.querySelector(
      ".slider"
    ).style.transform = `translateY(${transform}px)`;
    this.setState({ transform });
  };

  render() {
    const { tests } = this.state;
    // const length = tests.length
    let order = 1;
    console.log(tests);
    return (
      <Container>
        <div className='box'>
          <div className='slider'>
            {tests.map(({ _id, title, variants }) => (
              <>
                {order === 10 ? (
                  <Link to='/natija'>
                    <button className='btn btn-primary'>Show result</button>
                  </Link>
                ) : (
                  <Question
                    key={_id}
                    askTitle={title}
                    variants={variants}
                    order={order++}
                    onNextQuestion={this.nextQuestion}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

// https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js#L43
// https://reactjs.org/docs/hooks-state.html
// https://codepen.io/Jake_Woods/pen/vYYoYxo
// https://freefrontend.com/javascript-carousels/
