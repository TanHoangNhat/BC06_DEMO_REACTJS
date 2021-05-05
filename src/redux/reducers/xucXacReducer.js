import {
  COUNT_RESULT,
  HANLDE_CHOICE,
  HANLDE_PLAY
} from "../constants/xucXacConstant";

const initialState = {
  banChon: true, // true: Tài, false: Xỉu
  soBanThang: 0,
  soBanChoi: 0,
  xucXacs: [
    {
      soDiem: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      font: "one"
    },
    {
      soDiem: 2,
      hinhAnh: "./img/gameXucXac/2.png",
      font: "two"
    },
    {
      soDiem: 3,
      hinhAnh: "./img/gameXucXac/3.png",
      font: "three"
    }
  ]
};

const getIntRandom = () => {
  return Math.floor(Math.random() * 6); // return Integer from 0 --> 5
};

const XucXacMau = [
  {
    soDiem: 1,
    hinhAnh: "./img/gameXucXac/1.png",
    font: "one"
  },
  {
    soDiem: 2,
    hinhAnh: "./img/gameXucXac/2.png",
    font: "two"
  },
  {
    soDiem: 3,
    hinhAnh: "./img/gameXucXac/3.png",
    font: "three"
  },
  {
    soDiem: 4,
    hinhAnh: "./img/gameXucXac/4.png",
    font: "four"
  },
  {
    soDiem: 5,
    hinhAnh: "./img/gameXucXac/5.png",
    font: "five"
  },
  {
    soDiem: 6,
    hinhAnh: "./img/gameXucXac/6.png",
    font: "six"
  }
];

const xucXacReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case HANLDE_CHOICE:
      newState.banChon = payload;
      return newState;
    case HANLDE_PLAY:
      newState.xucXacs = [
        XucXacMau[getIntRandom()],
        XucXacMau[getIntRandom()],
        XucXacMau[getIntRandom()]
      ];
      return newState;
    case COUNT_RESULT:
      const totalMark = newState.xucXacs.reduce((reducer, xucXac) => {
        return (reducer += xucXac.soDiem);
      }, 0);
      let taiOrXiu = totalMark > 9 ? true : false;
      if (taiOrXiu === newState.banChon) {
        newState.soBanChoi += 1;
        newState.soBanThang += 1;
      } else {
        newState.soBanChoi += 1;
      }
      return newState;
  }
  return state;
};

export default xucXacReducer;
