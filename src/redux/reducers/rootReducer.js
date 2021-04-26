import { combineReducers } from "redux";
import cauThuReducer from "./cauThuReducer";

const rootReducer = combineReducers({
  // Kết hợp các reducer con tại đây
  //   cauThuReducer // Es6 object literal
  cauThu: cauThuReducer
});

export default rootReducer;
