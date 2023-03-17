import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
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
      <div className="image-container">
        <img src={coinList[coinIdx].image} alt=""/>
      </div>

      <CoinSelect coinIdx = {coinIdx} handleChangeCoin = {handleChangeCoin} marginTop = {'48px'}/>
    </Wrapper>    
  )
}

export default ChainItem;