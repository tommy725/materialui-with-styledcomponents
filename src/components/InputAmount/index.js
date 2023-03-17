import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Input } from "@material-ui/core";

import { Wrapper } from "./styles";

import CoinSelect from "../CoinSelect";

function InputAmount(props) {
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
        <Input readOnly={ readOnly } type="number" className="amount" value={ amount } onChange={ handleChangeAmount }></Input>
        <Box className="coin-select">
          <CoinSelect noBorder={ true } coinIdx={ coinIdx } handleChangeCoin={ handleChangeCoin } />
        </Box>
      </Box>
      <Typography className="sub-title">{ exchangeNotice }</Typography>
    </Wrapper>
  );
}

export default InputAmount;