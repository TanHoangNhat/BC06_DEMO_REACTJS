import React, { Component } from "react";

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1,
      status: false
    };
  }
  render() {
    return (
      <div>
        <h2>Updating</h2>
        <p className="display-4 text-dark">age: {this.state.age}</p>
        <button
          className="btn btn-info"
          onClick={() => {
            this.setState({
              age: this.state.age + 1
            });
          }}
        >
          Tăng tuổi
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              status: !this.state.status
            });
          }}
        >
          Change Status
        </button>
      </div>
    );
  }

  /**
   * componentDidUpdate():
   *    - Chạy khi nào?    --> Chạy sau render và chỉ chạy trong trạng thái Updating
   *    - Dùng để làm gì?  --> Call api (axios, ...), setState(), setTimeOut(), setInterval(),
   *                                             thường thực hiện các tác vụ bất đồng bộ
   * Vấn đề: bị lặp vô tận (render ~> componentDidUpdate ~> setState ~> render)
   * Khắc phục vấn đề: Cần phải có câu điều kiện dừng
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("State cũ:       ", prevState.status);
    console.log("State hiện tại: ", this.state.status);
    if (prevState.status !== this.state.status) {
      // Cũ và mới khác nhau thì mới update
      this.setState({
        status: false
      });
    }
  }
}

export default Updating;
