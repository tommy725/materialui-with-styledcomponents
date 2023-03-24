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
    <ButtonWrapper sx={{margin: isSwap ? '0 2.4rem' : "3.2rem 0 0 0"}}>
      <Button 
        className={isSwap ? "swap" : "approve"} 
        focusRipple 
        startIcon={isSwap ? <SwapSvg/> : <CardTickSvg/>}
        onClick={() => handleAction()}
      >
        {isSwap ? "" : "Coming Soon"}
      </Button>
    </ButtonWrapper>
  )
}

export default CustomButton;