/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import { Wrapper, CurvedLine } from './styles';

import SwapHeader from '../../components/SwapHeader';
import ChainItem from '../../components/ChainItem';
import WaveAnim from '../../components/WaveAnim';
import CustomButton from '../../components/CustomButton';
import InputAmount from '../../components/InputAmount';
import OtherRoutes from '../../components/OtherRoutes';

import {
  swap,
  changeStart,
  changeDest,
  changeAmount,
  swapAsync,
  selectStartCoinIdx,
  selectDestCoinIdx,
  selectAmount,
  selectReceivedAmount,
  selectExchangeNotice,
} from '../../redux/bridge';

function Bridge() {
  const startCoinIdx = useSelector(selectStartCoinIdx);
  const destCoinIdx = useSelector(selectDestCoinIdx);
  const amount = useSelector(selectAmount);
  const receivedAmount = useSelector(selectReceivedAmount);
  const exchangeNotice = useSelector(selectExchangeNotice);
  const dispatch = useDispatch();
  
  const handleChangeStart = (event) => {
    // useDispatch
    dispatch(changeStart(Number(event.target.value) || 0))
  };

  const handleChangeDest = (event) => {
    // useDispatch
    dispatch(changeDest(Number(event.target.value) || 0))
  };

  const handleSwap = (event) => {
    // useDispatch
    dispatch(swap())
  };

  const handleChangeAmount = (event) => {
    // useDispatch
    dispatch(changeAmount(Number(event.target.value) || 0))
  };

  const handleApprove = (event) => {
    // useDispatch
    // dispatch(approve())
  };

  return (
    <Wrapper>
      <SwapHeader />
      <Box className="body">
        <Box className="coin-type">
          <Box className="wave-anim">
            <WaveAnim />
          </Box>
          <ChainItem coinIdx={ startCoinIdx } handleChangeCoin={ handleChangeStart }/>
          <CustomButton isSwap={ true } handleAction={ handleSwap } />
          <ChainItem coinIdx={destCoinIdx} handleChangeCoin={ handleChangeDest }/>
        </Box>
        
        <Box className="amount-group">
          <InputAmount title={ "Enter Amount" } amount={ amount } coinIdx={ startCoinIdx } handleChangeCoin={ handleChangeStart } handleChangeAmount={ handleChangeAmount } />
          <InputAmount title={ "Received" } amount={ receivedAmount } exchangeNotice={ exchangeNotice } coinIdx={ destCoinIdx } handleChangeCoin={ handleChangeDest } readOnly={ true } />
        </Box>

        <Box className="other-routes">
          <OtherRoutes/>
        </Box>

        <CustomButton />
      </Box>
    </Wrapper>
  );
}

export default Bridge;
