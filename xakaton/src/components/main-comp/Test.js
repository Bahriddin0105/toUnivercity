/** @format */

import React, { Component } from "react";
import { Container } from "./style";
import Question from "./question";
import { Link } from "react-router-dom";
import { getQuestions } from "../../cerver/face-server";

export default class Test extends Component {
  state = {
    tests: [],
    categorys: {
      IT: "",
      Jdwu: "",
      Jdhwu: "",
      Jdhiuwu: ""
    },
    transform: 0,
  };

  componentDidMount() {
    const tests = getQuestions();
    this.setState({
      tests,
    });
  }

//   async componentDidMount() {
//     // GET request using axios with async/await
//     const response = await axios.get('https://api.npms.io/v2/search?q=react');
//     this.setState({ totalReactPackages: response.data.total })
// }

  handleBtn = (e, category) => {
    category += e;
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
    let order = 1;
    return (
      <Container>
        <div className='box'>
          <div className='slider'>
            {tests.map(({ _id, title, variants }) => (
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
