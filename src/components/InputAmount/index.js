import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Input  } from "@material-ui/core";
import { NumericFormat } from 'react-number-format';

import { Wrapper } from "./styles.module";

import CoinSelect from "../CoinSelect";

const InputAmount = (props) => {
  const {
    title,
    amount,
    exchangeNotice,
    coinIdx,
    handleChangeAmount,
    handleChangeCoin,
    readOnly
  } = props;

  return (
    <Wrapper>
      <Typography className="title">{ title }</Typography>
      <Box className="input-field">
        <NumericFormat 
          allowNegative= { false }
          thousandSeparator={true} 
          readOnly={ readOnly } 
          placeholder="0" 
          className="amount" 
          value={ amount } 
          onValueChange= { handleChangeAmount }
        />
        <Box className="coin-select">
          <CoinSelect noBorder={ true } coinIdx={ coinIdx } handleChangeCoin={ handleChangeCoin } />
        </Box>
      </Box>
      <Typography className="sub-title">{ exchangeNotice }</Typography>
    </Wrapper>
  );
}

export default InputAmount;