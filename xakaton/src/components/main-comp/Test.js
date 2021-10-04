/** @format */

import React, { Component } from "react";
import { Container } from "./style";
import Question from "./question";
import { Link } from "react-router-dom";
import { getQuestions } from "../../cerver/face-server";

export default class Test extends Component {
  state = {
    tests: [],
    transform: 0,
  };

  componentDidMount() {
    const tests = getQuestions();
    this.setState({
      tests,
    });
  }

  handleBtnAndNextQuestion = (e, categoryVal) => {
    categoryVal += e;
    console.log(categoryVal + "  value=" + e);

    let transform = this.state.transform;
    transform -= 680;
    document.querySelector(
      ".slider"
    ).style.transform = `translateY(${transform}px)`;
    this.setState({ transform, categoryVal });
  };

  render() {
    const { tests } = this.state;
    let order = 1;
    return (
      <Container>
        <div className='box'>
          <div className='slider'>
            {tests.map(({ _id, title, variants, category }) => (
              <>
                {order >= 4 ? (
                  <div className="d-flex justify-content-center h-50 align-items-center m-5 p-5">
                    <Link to='/natija'>
                    <button className='btn btn-primary'>Show result</button>
                  </Link>
                  </div>
                ) : (
                  <Question
                    key={_id}
                    askTitle={title}
                    variants={variants}
                    order={order++}
                    categoryVal = {category.value}
                    onBtnAndNextQuestion={this.handleBtnAndNextQuestion}
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

