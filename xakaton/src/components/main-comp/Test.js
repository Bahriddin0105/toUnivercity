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
    category: [
      {title: 'ART', value: 0},
      {title: 'IT', value: 0},
      {title: 'Teach', value: 0},
      {title: 'Tech', value: 0},
    ],
  };

  componentDidMount() {
    const tests = getQuestions();
    this.setState({
      tests,
    });
    alert("salom dunyo");
  }

  handleBtnAndNextQuestion = (e, categoryTitle) => {
    this.state.category.map((category) => {
      if(categoryTitle === category.title){
        category.value += e;
        let value = category.value;
        this.setState({value})
        console.log("categoty value=" + value + "  value=" + e);
      }
    })

    let transform = this.state.transform;
    transform -= 680;
    document.querySelector(
      ".slider"
    ).style.transform = `translateY(${transform}px)`;
    this.setState({ transform });
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
                {order >= 6 ? (
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
                    category = {category}
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

