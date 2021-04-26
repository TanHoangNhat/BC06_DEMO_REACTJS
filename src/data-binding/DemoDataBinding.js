import React, { Component } from "react";

export class DemoDataBinding extends Component {
  name = "CyberSoft";
  level = 54;
  say = "Hasagi!";
  //   imageSrc =
  //     "https://vcdn1-giaitri.vnecdn.net/2020/11/16/doraemon-1605499106-8489-1605499376.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=TIyldcx1uZW2ARcb4hmojg";
  renderInfo = () => {
    return (
      <div>
        <p>Name: {this.name}</p>
        <p>Level: {this.level}</p>
        <p>Say: {this.say}</p>
      </div>
    );
  };

  render() {
    const imageSrc =
      "https://vcdn1-giaitri.vnecdn.net/2020/11/16/doraemon-1605499106-8489-1605499376.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=TIyldcx1uZW2ARcb4hmojg";
    return (
      <div>
        <h1>Demo Data Bindingggggggggggggg</h1>
        {this.renderInfo()}
        {/* <img src={this.imageSrc} /> */}
        <img src={imageSrc} />
      </div>
    );
  }
}

export default DemoDataBinding;
