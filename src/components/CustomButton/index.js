import { Box, Button } from "@material-ui/core";
import React from "react";
import { ButtonWrapper } from "./styles.module";

import { ReactComponent as SwapSvg } from '../../assets/images/swap.svg';
import { ReactComponent as CardTickSvg } from '../../assets/images/card-tick.svg';

const CustomButton = (props) => {
  const {
    isSwap,
    handleAction,
  } = props;

  return (
    <ButtonWrapper sx={{ py: '40px', px: '55px', pb: '70px' }}>
      <Button
        focusRipple
        startIcon={<CardTickSvg />}
        onClick={() => handleAction()}
      >
        Approve
      </Button>
    </ButtonWrapper>
  )
}

export default CustomButton;