import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem, Box, Typography} from "@material-ui/core"

import { FormControlWrapper } from './styles'

function CoinSelect(props) {
  const {
    coinIdx,
    marginTop,
    handleChangeCoin,
    noBorder,
    noIcon
  } = props;

  const coinList = useSelector(state => state.bridge.coinList);

  return (
    <Box sx={{marginTop: marginTop}}>
      <FormControlWrapper>
        <Select className={ noBorder ? "no-border": "" }
          value={coinIdx}
          onChange={handleChangeCoin}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
        {coinList &&
          coinList.map((item, idx) => (
            <MenuItem value={idx}>{ noIcon ? "" : <img style={{display: "none"}} src={coinList[coinIdx].image} alt=""/>}<Typography>{item.name}</Typography></MenuItem>
          ))
        }
        </Select>
      </FormControlWrapper>
    </Box>
  )
} 

export default CoinSelect;
