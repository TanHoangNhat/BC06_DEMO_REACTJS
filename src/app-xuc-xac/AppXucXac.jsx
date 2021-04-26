import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnPlay from "./BtnPlay";
import KetQua from "./KetQua";

const getIntRandom = () => {
  return Math.floor(Math.random() * 6); // return Integer from 0 --> 5
};

export class AppXucXac extends Component {
  XucXacMau = [
    {
      soDiem: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      font: <i class="fas fa-dice-one fa-7x mx-2"></i>
    },
    {
      soDiem: 2,
      hinhAnh: "./img/gameXucXac/2.png",
      font: <i class="fas fa-dice-two fa-7x mx-2"></i>
    },
    {
      soDiem: 3,
      hinhAnh: "./img/gameXucXac/3.png",
      font: <i class="fas fa-dice-three fa-7x mx-2"></i>
    },
    {
      soDiem: 4,
      hinhAnh: "./img/gameXucXac/4.png",
      font: <i class="fas fa-dice-four fa-7x mx-2"></i>
    },
    {
      soDiem: 5,
      hinhAnh: "./img/gameXucXac/5.png",
      font: <i class="fas fa-dice-five fa-7x mx-2"></i>
    },
    {
      soDiem: 6,
      hinhAnh: "./img/gameXucXac/6.png",
      font: <i class="fas fa-dice-six fa-7x mx-2"></i>
    }
  ];
  state = {
    banChon: true, // true: Tài, false: Xỉu
    soBanThang: 0,
    soBanChoi: 0,
    xucXacs: [
      {
        soDiem: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        font: <i class="fas fa-dice-one fa-7x mx-2"></i>
      },
      {
        soDiem: 2,
        hinhAnh: "./img/gameXucXac/2.png",
        font: <i class="fas fa-dice-two fa-7x mx-2"></i>
      },
      {
        soDiem: 3,
        hinhAnh: "./img/gameXucXac/3.png",
        font: <i class="fas fa-dice-three fa-7x mx-2"></i>
      }
    ]
  };

  handleChoice = (taiOrXiu) => {
    this.setState({ banChon: taiOrXiu });
  };

  handlePlay = () => {
    let count = 0;
    const lacXucXac = setInterval(() => {
      const xucXacs = [
        this.XucXacMau[getIntRandom()],
        this.XucXacMau[getIntRandom()],
        this.XucXacMau[getIntRandom()]
      ];
      this.setState({
        xucXacs // ES6
      });
      count += 1;
      if (count > 10) {
        clearInterval(lacXucXac);
        this.handleResult();
      }
    }, 80);
  };

  handleResult = () => {
    /**
     * B1. Lấy cái mình chọn
     * B2. Tính số điểm => Tài hay Xỉu
     * B3. So sánh
     */
    const { banChon, xucXacs } = this.state;
    const totalMark = xucXacs.reduce((reducer, xucXac) => {
      return (reducer += xucXac.soDiem);
    }, 0);

    let taiOrXiu = totalMark > 9 ? true : false;
    if (banChon === taiOrXiu) {
      this.setState({
        soBanThang: this.state.soBanThang + 1,
        soBanChoi: this.state.soBanChoi + 1
      });
    } else {
      this.setState({
        soBanChoi: this.state.soBanChoi + 1
      });
    }
  };

  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <BanChoi
            xucXacs={this.state.xucXacs}
            handleChoice={this.handleChoice}
          />
        </div>
        <KetQua details={this.state} />
        <BtnPlay handlePlay={this.handlePlay} />
      </div>
    );
  }
}

export default AppXucXac;
