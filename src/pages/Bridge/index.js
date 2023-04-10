/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Input, IconButton, Divider } from '@material-ui/core';
import { Wrapper } from './styles.module';
import StakingBg from "../../assets/images/stakingBg.png"
import SwapIcon from "../../assets/images/swap.svg"

import Header from '../../components/Header';
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
  selectChainInfos,
} from '../../redux/bridge';
import { sendAtom } from '../../api/sendAtom';

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

  const handleApprove = () => {
    sendAtom(address, amount);
  };

  const chainInfo = useSelector(selectChainInfos);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (chainInfo && chainInfo['cosmoshub-4']?.accounts.length > 0) {
      setAddress(chainInfo['cosmoshub-4']?.accounts[0]?.address);
    }
    else {
      setAddress('');
    }
  }, chainInfo);

  return (
    <div class="bg-white text-base dark:bg-[#181B18] text-neutral-900 dark:text-neutral-200">
      <Wrapper>
        <div className="relative h-screen nc-PageStaking">
          <div className="absolute top-0 left-0 w-screen h-screen overflow-x-hidden">
            <img className="absolute z-0 w-screen h-screen" src={StakingBg} alt="" />
            <div className="absolute w-screen h-screen bg-[#33FF00] mix-blend-multiply z-0" />
            <div className={"absolute bg-[#33FF00] opacity-40 blur-[100px] w-[20vw] h-2/5 rounded-full -top-[100px] -left-[120px] z-0"}></div>
            <div className={"absolute bg-[#33FF00] opacity-40 blur-[100px] w-[20vw] h-2/5 rounded-full bottom-[0px] -right-[120px] z-0"}></div>
          </div>
        </div>
        <div className='absolute top-0 w-full h-screen overflow-y-auto'>
          <Header />
          <div className='w-full'>
            <div className='w-full p-8 overflow-auto'>
              <Container className="bridge-container">
                <SwapHeader />
                <ChainItem
                  label="From"
                  coinIdx={startCoinIdx}
                  handleChangeCoin={handleChangeStart}
                  amount={amount}
                  handleChangeAmount={handleChangeAmount}
                />
                <Box className='relative flex items-center justify-center'>
                  <Divider className='absolute bg-[#555555] top-6 mx-[55px] w-[90%]' />
                  <IconButton className='mt-0 rotate-90 -scale-x-100 bg-[#313631] hover:bg-[#555555] transition-all duration-200 ease-in-out border border-solid border-[#555555]' onClick={handleSwap}>
                    <img src={SwapIcon} alt="swap" />
                  </IconButton>
                </Box>
                <ChainItem
                  label="To"
                  coinIdx={destCoinIdx}
                  handleChangeCoin={handleChangeDest}
                  amount={receivedAmount}
                  handleChangeAmount={handleChangeAmount}
                  readOnly={true}
                />
                <CustomButton handleAction={handleApprove} />

                {/* <Container className="swap-body">


                  <Box className="coin-type">
                    <Box className="wave-anim">
                      <WaveAnim />
                    </Box>
                    <ChainItem coinIdx={startCoinIdx} handleChangeCoin={handleChangeStart} />
                    <CustomButton isSwap={true} handleAction={handleSwap} />
                    <ChainItem coinIdx={destCoinIdx} handleChangeCoin={handleChangeDest} />
                  </Box>

                  <Box className="amount-group">
                    <InputAmount title={`Enter Amount (${address})`} amount={amount} coinIdx={startCoinIdx} handleChangeCoin={handleChangeStart} handleChangeAmount={handleChangeAmount} />
                    <InputAmount title={"Received"} amount={receivedAmount} exchangeNotice={exchangeNotice} coinIdx={destCoinIdx} handleChangeCoin={handleChangeDest} readOnly={true} />
                    <Input />
                  </Box>

                  <Box className="other-routes">
                    <OtherRoutes />
                  </Box>

                  <CustomButton handleAction={handleApprove} />
                </Container> */}
              </Container>
            </div>
          </div>

        </div>


      </Wrapper>
    </div>



  );
}

export default Bridge;
