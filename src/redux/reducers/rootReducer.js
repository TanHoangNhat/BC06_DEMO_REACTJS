import { combineReducers } from "redux";
import cauThuReducer from "./cauThuReducer";
import xucXacReducer from "./xucXacReducer";

const rootReducer = combineReducers({
  // Kết hợp các reducer con tại đây
  //   cauThuReducer // Es6 object literal
  cauThu: cauThuReducer,
  xucXac: xucXacReducer
});

export default rootReducer;
