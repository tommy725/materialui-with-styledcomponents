import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Image } from "@material-ui/core";

import { Wrapper, RippleAnimView } from "./styles.module";

import CoinSelect from "../CoinSelect"

import {
  selectCoinList
} from '../../redux/bridge';

const ChainItem = (props) => {
  const {
    coinIdx,
    handleChangeCoin
  } = props;

  const coinList = useSelector(selectCoinList);

  return (
    <Wrapper>
      <Box className="image-container">
        <RippleAnimView className="ripple"></RippleAnimView>
        <RippleAnimView className="ripple"></RippleAnimView>
        <RippleAnimView className="ripple"></RippleAnimView>
        <Box>
          <img src={coinList[coinIdx].image} alt=""/>
        </Box>
      </Box>

      <Box sx={{marginTop: "4.8rem"}}>
        <CoinSelect coinIdx={coinIdx} handleChangeCoin={handleChangeCoin} noIcon={ true }/>
      </Box>
      
    </Wrapper>    
  )
}

export default ChainItem;