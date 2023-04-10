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
    chainInfos: localStorage.getItem('chainInfos') || {},
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
      const tempIdx = state.startCoinIdx;
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

    changeChainInfos: (state, action) => {
      state.chainInfos = action.payload;
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

export const { swap, changeStart, changeDest, changeAmount, changeReceiveAmountAndNotice, changeChainInfos } = bridgeSlice.actions;

export const selectStartCoinIdx = (state) => state.bridge.startCoinIdx;
export const selectDestCoinIdx = (state) => state.bridge.destCoinIdx;
export const selectCoinList = (state) => state.bridge.coinList;
export const selectAmount = (state) => state.bridge.amount;
export const selectReceivedAmount = (state) => state.bridge.receivedAmount;
export const selectExchangeNotice = (state) => state.bridge.exchangeNotice;
export const selectChainInfos = (state) => state.bridge.chainInfos;

export default bridgeSlice.reducer;
