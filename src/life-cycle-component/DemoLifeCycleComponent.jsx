import React, { Component } from "react";
import Mouting from "./Mouting";
import UnMouting from "./UnMouting";
import Updating from "./Updating";

class DemoLifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onOff: false
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Demo Life cycle component</h1>
        {/* {this.state.onOff ? <Mouting /> : null} */}
        <Updating />
        {this.state.onOff ? <UnMouting /> : null}
        <button
          className="btn btn-dark"
          onClick={() => {
            this.setState({
              onOff: !this.state.onOff
            });
          }}
        >
          On or Off
        </button>
      </div>
    );
  }
}

export default DemoLifeCycleComponent;
