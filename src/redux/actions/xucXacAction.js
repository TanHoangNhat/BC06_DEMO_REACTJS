import {
  COUNT_RESULT,
  HANLDE_CHOICE,
  HANLDE_PLAY
} from "../constants/xucXacConstant";

export const handleChoiceAction = (taiOrXiu) => {
  return {
    type: HANLDE_CHOICE,
    payload: taiOrXiu
  };
};

export const handlePlayAction = () => {
  return {
    type: HANLDE_PLAY
  };
};

export const countResultAction = () => {
  return {
    type: COUNT_RESULT
  };
};
