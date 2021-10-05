/** @format */

import React, { Component } from "react";
import { Container } from "./style";
import Question from "./question";
import { Link } from "react-router-dom";
import { getQuestions } from "../../cerver/new-server";

export default class Test extends Component {
  state = {
    tests: [],
    transform: 0,
    category: [
      { title: "ART", value: 0 },
      { title: "IT", value: 0 },
      { title: "BUSINESS", value: 0 },
      { title: "TECHNICIAN", value: 0 },
    ],
    variants: [
      {
        _id: "5fe5c299db9b000a30e077011",
        latter: "A",
        title: "Very Interested",
        value: 3,
      },
      {
        _id: "5fe5c299db9b000a30e077012",
        latter: "B",
        title: "Interested",
        value: 2,
      },
      {
        _id: "5fe5c299db9b000a30e077013",
        latter: "C",
        title: "Slightly Interested",
        value: 1,
      },
      {
        _id: "5fe5c299db9b000a30e077014",
        latter: "D",
        title: "Not Interested",
        value: 0,
      },
    ],
    value: {
      art: 0,
      it: 0,
      business: 0,
      technican: 0,
    }
  };

  componentDidMount() {
    const tests = getQuestions();
    this.setState({
      tests,
    });
  }

  handleBtnAndNextQuestion = (e, categoryTitle) => {
    this.state.category.map((category) => {
      if (categoryTitle === category.title) {
        category.value += e;
        let value = category.value;
        this.setState({ value });
        console.log("categoty value=" + value + "  value=" + e);
      }
    });

    let transform = this.state.transform;
    transform -= 680;
    document.querySelector(
      ".slider"
    ).style.transform = `translateY(${transform}px)`;
    this.setState({ transform });
  };

  render() {
    const { tests, variants } = this.state;
    let order = 1;

    return (
      <Container>
        <div className='box'>
          <div className='slider'>
            {tests.map(({ _id, title, category }) => (
              <>
                {order == 3 ? (
                  <div className='d-flex justify-content-center h-50 align-items-center m-5 p-5'>
                    <Link >
                      <button className='btn btn-primary'>Show result</button>
                    </Link>
                  </div>
                ) : (
                  <Question
                    key={_id}
                    askTitle={title}
                    variants={variants}
                    order={order++}
                    category={category}
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
