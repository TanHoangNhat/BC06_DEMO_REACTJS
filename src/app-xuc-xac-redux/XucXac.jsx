import React, { Component } from "react";
import { connect } from "react-redux";

export class XucXac extends Component {
  render() {
    let keyframe = `@keyframes mymove${Date.now()} {
      0% {top: -50px;}
      50% {top: 100px;}
      100% {top: 0px;}
    }`;

    let { xucXac } = this.props;
    // return <img src={xucXac.hinhAnh} width={50} height={50} alt="hinh" />;
    return (
      <>
        <style>{keyframe}</style>
        <i
          // animation
          // style={{ animation: `mymove${Date.now()} .5s`, position: "absolute" }}
          class={"fas fa-dice-" + xucXac.font + " fa-5x mx-2"}
        ></i>
      </>
    );
  }
}

export default XucXac;
