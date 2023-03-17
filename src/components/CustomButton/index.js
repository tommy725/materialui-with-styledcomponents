import { Box, Button } from "@material-ui/core";
import React from "react";
import { ButtonWrapper } from "./styles";

import { ReactComponent as SwapSvg } from '../../assets/images/swap.svg';
import { ReactComponent as CardTickSvg } from '../../assets/images/card-tick.svg';

function CustomButton(props) {
  const {
    isSwap,
    handleAction,
  } = props;

  return ( 
    <ButtonWrapper sx={{margin: isSwap ? '0 24px' : "32px 0 0 0"}}>
      <Button 
        className={isSwap ? "swap" : "approve"} 
        focusRipple 
        startIcon={isSwap ? <SwapSvg/> : <CardTickSvg/>}
        onClick={() => handleAction()}
      >
        {isSwap ? "" : "Approve"}
      </Button>
    </ButtonWrapper>
  )
}

export default CustomButton;