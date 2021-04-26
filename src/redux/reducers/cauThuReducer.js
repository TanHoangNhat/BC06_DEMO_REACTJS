import { DOI_HINH_ANH, DOI_SO_AO } from "../constants/cauThuConstant";

const initialState = {
  name: "Doraemon",
  number: "22",
  skills: "goal, protect",
  picture: "https://salt.tikicdn.com/media/catalog/product/t/a/tap-14.jpg"
};

const cauThuReducer = (state = initialState, action) => {
  // Nhận lại action từ component gửi lên
  const { type } = action;
  // Chia trường hợp để xử lý
  switch (type) {
    case DOI_HINH_ANH:
      state.picture = "http://st.nettruyen.com/data/comics/91/doraemon.jpg";
      // State cũ phải khác state mới thì nó mới cập nhật lại props của component
      // Props thay đổi thì render sẽ được chạy lại
      const newState = { ...state };
      return newState;
    case DOI_SO_AO:
      state.number = Math.floor(Math.random() * 99);
      return { ...state };
    default:
      return state;
  }
};

export default cauThuReducer;
