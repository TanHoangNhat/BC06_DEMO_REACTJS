import React, { Component } from "react";
import { connect } from "react-redux";

export class KetQua extends Component {
  render() {
    let { banChon, soBanThang, soBanChoi } = this.props;
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

const mapStateToProps = (state) => {
  return {
    // Key là props của component : value là state ở store
    banChon: state.xucXac.banChon,
    soBanThang: state.xucXac.soBanThang,
    soBanChoi: state.xucXac.soBanChoi
  };
};

export default connect(mapStateToProps)(KetQua);
