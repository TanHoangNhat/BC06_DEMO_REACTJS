import React, { Component } from "react";
import { connect } from "react-redux";
import {
  countResultAction,
  handlePlayAction
} from "../redux/actions/xucXacAction";

export class BtnPlay extends Component {
  render() {
    let { handlePlay, countResult } = this.props;
    return (
      <div className="text-center">
        <button
          className="btn btn-success"
          style={{ fontSize: 30 }}
          onClick={() => {
            let count = 0;
            const interval = setInterval(() => {
              handlePlay();
              count += 1;
              if (count > 10) {
                clearInterval(interval);
                countResult();
              }
            }, 100);
          }}
        >
          PLAY GAME
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlay: () => {
      dispatch(handlePlayAction());
    },
    countResult: () => {
      dispatch(countResultAction());
    }
  };
};

export default connect(null, mapDispatchToProps)(BtnPlay);
