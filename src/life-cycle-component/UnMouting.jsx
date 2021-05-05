import React, { Component } from "react";

class UnMouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <h2>UnMouting</h2>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }

  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  /**
   * componentWillUnmount():
   *    - Chạy khi nào?    --> Khi component bị tháo gở khỏi cây DOM (DOM tree) của ReactJS
   *    - Dùng để làm gì?  --> Dọn dẹp các hàm còn chạy khi component rời khỏi DOM tree
   */
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.counter);
  }
}

export default UnMouting;
