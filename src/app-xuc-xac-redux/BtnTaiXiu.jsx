import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChoiceAction } from "../redux/actions/xucXacAction";
export class BtnTaiXiu extends Component {
  render() {
    let { handleChoice, taiOrXiu } = this.props;
    return (
      <div className="col-4">
        <button
          className={
            (taiOrXiu ? "bg-danger" : "bg-dark") + " display-4 p-5 text-light"
          }
          onClick={() => handleChoice(taiOrXiu)}
        >
          {taiOrXiu ? "TÀI" : "XỈU"}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChoice: (taiOrXiu) => {
      dispatch(handleChoiceAction(taiOrXiu));
    }
  };
};

export default connect(null, mapDispatchToProps)(BtnTaiXiu);
