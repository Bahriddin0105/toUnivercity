import React, { Component } from "react";
import { getApi } from "../host/config";

export default class Tests extends Component {
  state = {
    ptest: [
      // {
      //   id: 1,
      //   title: "kompyuter nima",
      //   category: "IT",
      //   variantDomain: [
      //     {
      //       id: 4,
      //       title: "temir",
      //       value: 3,
      //     },
      //     {
      //       id: 1,
      //       title: "oyinchoq",
      //       value: 0,
      //     },
      //     {
      //       id: 3,
      //       title: "kksiz",
      //       value: 2,
      //     },
      //     {
      //       id: 2,
      //       title: "qiziqmayman",
      //       value: 1,
      //     },
      //   ],
      // },
      // {
      //   id: 1,
      //   title: "kompyuter nima",
      //   category: "IT",
      //   variantDomain: [
      //     {
      //       id: 4,
      //       title: "temir",
      //       value: 3,
      //     },
      //     {
      //       id: 1,
      //       title: "oyinchoq",
      //       value: 0,
      //     },
      //     {
      //       id: 3,
      //       title: "kksiz",
      //       value: 2,
      //     },
      //     {
      //       id: 2,
      //       title: "qiziqmayman",
      //       value: 1,
      //     },
      //   ],
      // },
      // {
      //   id: 1,
      //   title: "kompyuter nima",
      //   category: "IT",
      //   variantDomain: [
      //     {
      //       id: 4,
      //       title: "temir",
      //       value: 3,
      //     },
      //     {
      //       id: 1,
      //       title: "oyinchoq",
      //       value: 0,
      //     },
      //     {
      //       id: 3,
      //       title: "kksiz",
      //       value: 2,
      //     },
      //     {
      //       id: 2,
      //       title: "qiziqmayman",
      //       value: 1,
      //     },
      //   ],
      // },
    ],
  };
  getAPI = () => {
    // getApi()
    //   .then((res) => this.setState({ ptest: res.data }))
    //   .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getAPI();
  }
  render() {
    const { ptest } = this.state;
    return (
      <div>
        qalee
        {ptest !== []
          ? ptest.map((item, key) => {
              return (
                <div>
                  <span>{item.id}/15</span>
                  <h3>{item.title}</h3>
                  {item.variantDomain.map((item1) => {
                    return <p>{item1.title}</p>;
                  })}
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
