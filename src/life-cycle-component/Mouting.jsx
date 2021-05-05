import React, { Component } from "react";
import axios from "axios";

class Mouting extends Component {
  /**
   * constructor():
   *    - Chạy khi nào?    --> Component được gọi thì sẽ chạy và chạy một lần duy nhất
   *    - Dùng để làm gì?  --> Kế thừa props và khởi tạo state
   */
  constructor(props) {
    super(props); // Kế thừa props từ class Component
    this.state = {
      name: "TanHN",
      dsPhim: []
    };
    console.log("Constructor");
  }

  /**
   * render():
   *    - Chạy khi nào?    --> gọi setState() hoặc có props mới hoặc gọi hàm forceUpdate()
   *    - Dùng để làm gì?  --> chuyển jsx thành html để hiển thị lên màn hình
   */
  render() {
    console.log("Render");
    return (
      <div>
        <h2>Mouting</h2>
        <ul>
          {this.state.dsPhim.map((phim, index) => {
            return (
              <li key={index}>
                <h2>{phim.tenPhim}</h2>
                <img src={phim.hinhAnh} alt="" width="300px" />
              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.forceUpdate(); // làm cho render chạy lại
          }}
        >
          Click me!
        </button>
      </div>
    );
  }

  /**
   * componentDidMount():
   *    - Chạy khi nào?    --> Chạy sau render và chỉ chạy trong trạng thái mouting
   *    - Dùng để làm gì?  --> Call api (axios, ...), setState(), setTimeOut(), setInterval(),
   *                                             thường thực hiện các tác vụ bất đồng bộ
   */
  componentDidMount() {
    console.log("componentDidMount");
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      data: null
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ dsPhim: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Mouting;
