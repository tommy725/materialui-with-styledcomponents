import { createSlice } from '@reduxjs/toolkit';
import XRPSvg  from '../assets/images/xrp.svg'
import AtomSvg  from '../assets/images/atom.svg'

export const bridgeSlice = createSlice({
  name: 'bridge',
  initialState: {
    startCoinIdx: 0,
    destCoinIdx: 1,
    amount: "",
    receivedAmount: 0,
    exchangeNotice: "1 XRP = 0.031521 Atom",
    coinList: [
      {id: 1, name: 'XRP', image: XRPSvg},
      {id: 2, name: 'Atom', image: AtomSvg},
    ]
  },
  reducers: {
    swap: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const tempIdx =  state.startCoinIdx;
      state.startCoinIdx = state.destCoinIdx;
      state.destCoinIdx = tempIdx;
    },
    
    changeStart: (state, action) => {
      state.destCoinIdx = state.startCoinIdx;
      state.startCoinIdx = action.payload;
    },

    changeDest: (state, action) => {
      state.startCoinIdx = state.destCoinIdx;
      state.destCoinIdx = action.payload;
    },

    changeNotice: (state, action) => {
      state.destCoinIdx = state.startCoinIdx;

      state.startCoinIdx = action.payload;
    },

    changeAmount: (state, action) => {
      state.amount = action.payload;
    },

    changeReceiveAmountAndNotice:(state) => {
      // Calculate received amount.
      // startCoinIdx
      // 0: xrpl -> cosmos
      // 1: cosmos -> xrpl
      if (state.startCoinIdx == 0) {
        state.receivedAmount = state.amount * 0.031521;
      } else {
        state.receivedAmount = state.amount / 0.031521;
      }

      if (state.receivedAmount > 0) {
        state.receivedAmount = state.receivedAmount.toFixed(6);
      } else {
        state.receivedAmount = 0;
      }

      if (state.startCoinIdx == 0) {
        state.exchangeNotice = "1 XRP = 0.031521 Atom";
      } else {
        state.exchangeNotice = "1 Atom = 31.724882 XRP";
      }
    }
  },
});

export const { swap, changeStart, changeDest, changeAmount, changeReceiveAmountAndNotice } = bridgeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const swapAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(swap());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStartCoinIdx = (state) => state.bridge.startCoinIdx;
export const selectDestCoinIdx = (state) => state.bridge.destCoinIdx;
export const selectCoinList = (state) => state.bridge.coinList;
export const selectAmount = (state) => state.bridge.amount;
export const selectReceivedAmount = (state) => state.bridge.receivedAmount;
export const selectExchangeNotice = (state) => state.bridge.exchangeNotice;

export default bridgeSlice.reducer;
