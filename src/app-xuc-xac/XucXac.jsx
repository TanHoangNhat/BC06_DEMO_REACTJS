import React, { Component } from "react";

export class XucXac extends Component {
  render() {
    let { xucXac } = this.props;
    // return <img src={xucXac.hinhAnh} width={50} height={50} alt="hinh" />;
    return xucXac.font;
  }
}

export default XucXac;
