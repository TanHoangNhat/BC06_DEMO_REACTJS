import React, { Component } from "react";

export class KetQua extends Component {
  render() {
    let { banChon, soBanThang, soBanChoi } = this.props.details;
    return (
      <div className="ketQua container text-center display-4">
        <div>
          bạn chọn :{" "}
          <span className="text-danger">{banChon ? " TÀI" : "XỈU"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

export default KetQua;
