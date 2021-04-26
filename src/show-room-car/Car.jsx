import React, { Component } from "react";

export class Car extends Component {
  render() {
    let { carImg } = this.props;
    return (
      <div className="car mt-2">
        <img className="img-thumbnail" src={carImg} alt="hinh" />
      </div>
    );
  }
}

export default Car;
