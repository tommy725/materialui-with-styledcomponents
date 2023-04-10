import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Image, Typography } from "@material-ui/core";
import { IoWalletOutline } from "react-icons/io5";
import { Wrapper, IconImage, FlexBox, RightBox } from "./styles.module";
import { selectCoinList } from '../../redux/bridge';
import CoinSelect from "../CoinSelect"
import InputAmount from "../InputAmount";
import ButtonPrimary from "../Shared/Button/ButtonPrimary";
import effect from "../../assets/images/effect.png";

const ChainItem = (props) => {
  const {
    coinIdx,
    label,
    handleChangeCoin,
    amount,
    address,
    handleChangeAmount,
    readOnly,
  } = props;

  const coinList = useSelector(selectCoinList);

  return (
    <Wrapper>
      <FlexBox>
        {console.log(coinList[coinIdx].image)}
        <Box className="relative w-[144px] h-[144px] mr-[35px]">
          <IconImage src={coinList[coinIdx].image} alt="chain-logo" />
          <img
            className="absolute object-fill w-[200%] -left-[25px] -bottom-[27px] max-w-none"
            src={effect} alt="effect" />
        </Box>
        <RightBox>
          <FlexBox className="justify-between">
            <CoinSelect width={200} coinIdx={coinIdx} label={label} noIcon={true} handleChangeCoin={handleChangeCoin} />
            <ButtonPrimary
              sizeClass="px-4 sm:px-5"
            // onClick={() => connectTo("Keplr")}
            >
              <IoWalletOutline size={22} />
              <span className="pl-2">
                Wallet Connect
              </span>
            </ButtonPrimary>
          </FlexBox>
          <InputAmount
            amount={amount}
            coinIdx={coinIdx}
            handleChangeCoin={handleChangeCoin}
            handleChangeAmount={handleChangeAmount}
            readOnly={readOnly}
          />
        </RightBox>
      </FlexBox>

    </Wrapper>
  )
}

export default ChainItem;