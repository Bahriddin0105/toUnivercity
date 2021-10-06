/** @format */

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "./style";
import Question from "./question";
import Natija from "../result/Natija";
import { Link } from "react-router-dom";
import axios from "axios";

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
    },
    block: 'display: "block"',
    none: 'display: "none"',
  };

  componentDidMount() {
    axios
      .get("https://questions01.herokuapp.com")
      .then((res) => {
        this.setState({
          tests: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleVriantAndNextQuestion = (e, categoryTitle) => {
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

  onBtn = () => {
    document.getElementById("none").style.display="none";
    document.getElementById("result").style.display="block";
    // let block = this.state.block;
    // let none = this.state.none;
    // none = 'display: "block"';
    // block = 'display: "none"';
    // console.log(block, none);
    // this.setState({ block, none });
  };

  render() {
    const { tests, variants, category, block, none } = this.state;
    let order = 1;

    return (
      <>
        <Container id='none' style={{block}}>
          <div className='box'>
            <div className='slider'>
              {tests.map(({ _id, title, category }) => (
                <Question
                  key={_id}
                  askTitle={title}
                  variants={variants}
                  order={order++}
                  category={category}
                  onVriantAndNextQuestion={this.handleVriantAndNextQuestion}
                />
              ))}
              <div className='d-flex justify-content-center align-items-center m-5 p-5'>
                <button
                  className='btn btn-primary'
                  onClick={() => this.onBtn()}>
                  Show result
                </button>
              </div>
            </div>
          </div>
        </Container>
        <Natija category={category} style={{none}} id="result"/>
      </>
    );
  }
}
