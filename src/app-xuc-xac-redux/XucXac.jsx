import React, { Component } from "react";
import { connect } from "react-redux";

export class XucXac extends Component {
  render() {
    let { xucXac } = this.props;
    // return <img src={xucXac.hinhAnh} width={50} height={50} alt="hinh" />;
    return <i class={"fas fa-dice-" + xucXac.font + " fa-5x mx-2"}></i>;
  }
}

export default XucXac;
