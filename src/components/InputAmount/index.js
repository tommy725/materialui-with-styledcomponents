import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Input, Button, IconButton } from "@material-ui/core";
import { NumericFormat } from 'react-number-format';
import { Wrapper } from "./styles.module";
import CoinSelect from "../CoinSelect";
import maxImage from "../../assets/images/max.png";

const InputAmount = (props) => {
  const {
    amount,
    exchangeNotice,
    coinIdx,
    handleChangeAmount,
    handleChangeCoin,
    readOnly
  } = props;

  return (
    <Wrapper>
      <Box className="relative input-field">
        <NumericFormat
          className="amount"
          allowNegative={false}
          thousandSeparator={true}
          readOnly={readOnly}
          placeholder="0"
          value={amount}
          onValueChange={handleChangeAmount}
        />
        {!readOnly &&
          <IconButton className="absolute right-[190px] h-full m-0 p-0">
            <img className="h-[40px] pb-[5px]" src={maxImage} alt="max" />
          </IconButton>
        }
        <Box className="coin-select">
          <CoinSelect
            width={180}
            noBorder={true}
            coinIdx={coinIdx}
            handleChangeCoin={handleChangeCoin}
          />
        </Box>
      </Box>
      <Typography className="sub-title">{exchangeNotice}</Typography>
    </Wrapper>
  );
}

export default InputAmount;