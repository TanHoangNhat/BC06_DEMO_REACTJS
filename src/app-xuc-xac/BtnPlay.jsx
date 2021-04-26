import React, { Component } from "react";

export class BtnPlay extends Component {
  render() {
    let { handlePlay } = this.props;
    return (
      <div className="text-center">
        <button
          className="btn btn-success"
          style={{ fontSize: 30 }}
          onClick={handlePlay}
        >
          PLAY GAME
        </button>
      </div>
    );
  }
}

export default BtnPlay;
