import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Image } from "@material-ui/core";

import { Wrapper } from "./styles";

import CoinSelect from "../CoinSelect"

import {
  selectCoinList
} from '../../redux/bridge';

function ChainItem(props) {
  const {
    coinIdx,
    handleChangeCoin
  } = props;

  const coinList = useSelector(selectCoinList);

  return (
    <Wrapper>
      <Box className="image-container">
        <img src={coinList[coinIdx].image} alt=""/>
      </Box>

      <CoinSelect coinIdx={coinIdx} handleChangeCoin={handleChangeCoin} marginTop={'48px'} noIcon={ true }/>
    </Wrapper>    
  )
}

export default ChainItem;