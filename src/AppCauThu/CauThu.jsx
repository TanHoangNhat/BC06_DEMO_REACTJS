import React, { Component } from "react";
import { connect } from "react-redux";
import { doiHinhAnhAction, doiSoAoAction } from "../redux/actions/cauThuAction";

export class CauThu extends Component {
  handleClick = () => {
    const { doiHinhAnh } = this.props;
    doiHinhAnh();
  };
  handleChangeNumber = () => {
    const { doiSoAo } = this.props;
    doiSoAo();
  };

  render() {
    const { ten, soAo, hinhAnh } = this.props;
    return (
      <div className="container">
        <h1 className="display-4">Tên: {ten}</h1>
        <h1 className="display-3">
          Số áo:{" "}
          <span className="px-3 text-danger font-weight-bold"> {soAo}</span>
        </h1>
        <img src={hinhAnh} width="200px" height="300px" alt="" />
        <br />
        <button className="btn btn-success" onClick={this.handleClick}>
          Đổi hình
        </button>
        <button className="btn btn-info my-2" onClick={this.handleChangeNumber}>
          Đổi số áo
        </button>
      </div>
    );
  }
}

// Chuyển đổi những state ở trên store thành props ở component
const mapStateToProps = (state) => {
  return {
    // Key là props của component : value là state ở store
    ten: state.cauThu.name,
    soAo: state.cauThu.number,
    hinhAnh: state.cauThu.picture
  };
};

// Gửi data lên store
const mapDispatchToProps = (dispatch) => {
  return {
    // Key là props của component : value là phương thức gửi action lên store
    doiHinhAnh: () => {
      // Gửi action lên reducer
      dispatch(doiHinhAnhAction());
    },

    doiSoAo: () => {
      dispatch(doiSoAoAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CauThu);
