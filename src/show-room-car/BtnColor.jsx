import React, { Component } from "react";

export class BtnColor extends Component {
  render() {
    let { handleClick, btn } = this.props;
    return (
      <button className="btn" onClick={() => handleClick(btn.name)}>
        <img src={btn.imgSrc} alt="hinh" style={{ width: 50 }} />
      </button>
    );
  }
}

export default BtnColor;
