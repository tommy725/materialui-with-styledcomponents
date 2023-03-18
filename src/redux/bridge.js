import { createSlice } from '@reduxjs/toolkit';
import EthereumSvg  from '../assets/images/ethereum.svg'
import PolygonSvg  from '../assets/images/polygon.svg'

export const bridgeSlice = createSlice({
  name: 'bridge',
  initialState: {
    startCoinIdx: 0,
    destCoinIdx: 0,
    amount: "",
    receivedAmount: 0,
    exchangeNotice: "1 ETH = 1,270.76787 MATIC",
    coinList: [
      {id: 1, name: 'Ethereum', image: EthereumSvg},
      {id: 2, name: 'Bitcoin', image: EthereumSvg},
      {id: 3, name: 'Polygon', image: PolygonSvg},
      {id: 4, name: 'Matic', image: PolygonSvg},
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
      state.startCoinIdx = action.payload;
    },

    changeDest: (state, action) => {
      state.destCoinIdx = action.payload;
    },

    changeAmount: (state, action) => {
      state.amount = action.payload;

      // Calculate received amount.
      state.receivedAmount = state.amount + 5;
    },
  },
});

export const { swap, changeStart, changeDest, changeAmount } = bridgeSlice.actions;

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
