import React, { Component } from "react";
import BtnColor from "./BtnColor";
import Car from "./Car";

export class ShowRoomCar extends Component {
  // Dùng không được vì không render lại UI
  //   carImg = "./img/car/products/black-car.jpg";
  state = {
    carImg: "./img/car/products/black-car.jpg",
    btnChoiceColorList: [
      {
        name: "black",
        imgSrc: "./img/car/icons/icon-black.jpg"
      },
      {
        name: "red",
        imgSrc: "./img/car/icons/icon-red.jpg"
      },
      {
        name: "silver",
        imgSrc: "./img/car/icons/icon-silver.jpg"
      },
      {
        name: "steel",
        imgSrc: "./img/car/icons/icon-steel.jpg"
      }
    ]
  };

  renderBtnChoiceColorList = () => {
    return this.state.btnChoiceColorList.map((btn, i) => {
      return <BtnColor key={i} btn={btn} handleClick={this.handleClick} />;
    });
  };
  handleClick = (color) => {
    // let urlImage = "";
    // switch (color) {
    //   case "black":
    //     urlImage = "./img/car/products/black-car.jpg";
    //     break;
    //   case "red":
    //     urlImage = "./img/car/products/red-car.jpg";
    //     break;
    //   case "silver":
    //     urlImage = "./img/car/products/silver-car.jpg";
    //     break;
    //   case "steel":
    //     urlImage = "./img/car/products/steel-car.jpg";
    //     break;
    // }
    // this.setState({
    //   carImg: urlImage
    // });

    // demo async (truoc, sau)
    // console.log("truoc", this.state.carImg);

    this.setState(
      {
        carImg: `./img/car/products/${color}-car.jpg`
      },
      () => {
        // console.log("sau", this.state.carImg);
      }
    );
  };
  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            {this.renderBtnChoiceColorList()}
          </div>
          <Car carImg={this.state.carImg} />
        </div>
      </section>
    );
  }
}

export default ShowRoomCar;
