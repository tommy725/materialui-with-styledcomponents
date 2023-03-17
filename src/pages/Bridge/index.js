/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack } from '@material-ui/core';

import { Wrapper } from './styles';

import SwapHeader from '../../components/SwapHeader';
import ChainItem from '../../components/ChainItem';
import BridgeButton from '../../components/CustomButton';

import {
  swap,
  changeStart,
  changeDest,
  swapAsync,
  selectStartCoinIdx,
  selectDestCoinIdx,
} from '../../redux/bridge';
import { SpaceBar } from '@mui/icons-material';

function Bridge() {
  const startCoinIdx = useSelector(selectStartCoinIdx);
  const destCoinIdx = useSelector(selectDestCoinIdx);
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

  const handleApprove = (event) => {
    // useDispatch
    // dispatch(approve())
  };

  return (
    <Wrapper>
      <SwapHeader />
      <Box className="body">
        <Box className="coin-type">
          <ChainItem coinIdx={ startCoinIdx } handleChangeCoin={ handleChangeStart }/>
          <BridgeButton isSwap={ true } handleAction={ handleSwap } />
          <ChainItem coinIdx={destCoinIdx} handleChangeCoin={ handleChangeDest }/>
        </Box>
        <BridgeButton isSwap={false} />
      </Box>
    </Wrapper>
  );
}

export default Bridge;
