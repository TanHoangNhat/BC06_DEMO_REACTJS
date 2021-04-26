import React, { Component } from "react";

export class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
        <p>Name: {this.props.playerName}</p>
        <p>Number: {this.props.playerNumber}</p>
        <hr />
        <p>Name: {this.props.cauThu.name}</p>
        <p>Number: {this.props.cauThu.number}</p>
      </div>
    );
  }
}

export default Child;
