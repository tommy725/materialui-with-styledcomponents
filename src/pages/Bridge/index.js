/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box } from '@material-ui/core';
import { Wrapper } from './styles.module';
import StakingBg from "../../assets/images/stakingBg.png"

import SiteHeader from '../../components/Header/SiteHeader';
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
  changeReceiveAmountAndNotice,
} from '../../redux/bridge';

const Bridge = () => {
  const startCoinIdx = useSelector(selectStartCoinIdx);
  const destCoinIdx = useSelector(selectDestCoinIdx);
  const amount = useSelector(selectAmount);
  const receivedAmount = useSelector(selectReceivedAmount);
  const exchangeNotice = useSelector(selectExchangeNotice);
  const dispatch = useDispatch();
  
  const handleChangeStart = (event) => {
    // useDispatch
    dispatch(changeStart(Number(event.target.value) || 0))
    dispatch(changeReceiveAmountAndNotice());
  };

  const handleChangeDest = (event) => {
    // useDispatch
    dispatch(changeDest(Number(event.target.value) || 0))
    dispatch(changeReceiveAmountAndNotice());
  };

  const handleSwap = (event) => {
    // useDispatch
    dispatch(swap())
    dispatch(changeReceiveAmountAndNotice());
  };

  const handleChangeAmount = (event) => {
    // useDispatch
    console.log("Input value =====> ", event.floatValue);
    dispatch(changeAmount(event.floatValue))
    dispatch(changeReceiveAmountAndNotice());
  };

  const handleApprove = (event) => {
    // useDispatch
    // dispatch(approve())
  };

  return (
    <div class="bg-white text-base dark:bg-[#181B18] text-neutral-900 dark:text-neutral-200">
      <Wrapper>
        <SiteHeader />
        <div className="nc-PageStaking relative overflow-x-clip min-h-[680px]">
          <div className="absolute  w-full h-full">
            <img className="absolute w-full h-full z-0" src={StakingBg} alt="" />
            <div className="absolute w-full h-full bg-[#33FF00] mix-blend-multiply z-0" />
            <div className={"absolute bg-[#33FF00] opacity-40 blur-[100px] w-[20vw] h-2/3 rounded-full -top-[100px] -left-[120px] z-0"}></div>
            <div className={"absolute bg-[#33FF00] opacity-40 blur-[100px] w-[20vw] h-2/3 rounded-full bottom-[0px] -right-[120px] z-0"}></div>
          </div>
        
          <Container className="container">
            <SwapHeader />
            <Container className="swap-body">
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

              {/* <Box className="other-routes">
                <OtherRoutes />
              </Box> */}

              <CustomButton handleAction={ handleApprove } />
            </Container>
          </Container>
            
        </div>
        
      </Wrapper>
    </div>

    
    
  );
}

export default Bridge;
