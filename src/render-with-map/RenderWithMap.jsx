import React, { Component } from "react";

export class RenderWithMap extends Component {
  state = {
    listMusic: [
      {
        author: "BinZ",
        music: "Big City Boiz"
      },
      {
        author: "Phong Hào",
        music: "Small City Girl"
      },
      {
        author: "MTP",
        music: "Nơi này có anh"
      }
    ]
  };
  renderListMusic = () => {
    return this.state.listMusic.map((music, index) => {
      return (
        <li key={index}>
          <p>{music.music}</p>
          <p>{music.author}</p>
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>Danh sách bài hát</h1>
        <ul>{this.renderListMusic()}</ul>
      </div>
    );
  }
}

export default RenderWithMap;
