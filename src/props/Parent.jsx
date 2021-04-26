import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  state = {
    name: "TanHN",
    number: 22
  };
  render() {
    return (
      <div>
        <h1>Demo Props</h1>
        <Child
          cauThu={this.state}
          playerName={this.state.name}
          playerNumber={this.state.number}
        />
      </div>
    );
  }
}

export default Parent;
