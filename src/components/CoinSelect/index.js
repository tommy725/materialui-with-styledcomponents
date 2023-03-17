import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Box, Typography} from "@material-ui/core"

import { Wrapper } from './styles'

function CoinSelect(props) {
  const {
    coinIdx,
    handleChangeCoin,
    noBorder,
    noIcon
  } = props;

  const coinList = useSelector(state => state.bridge.coinList);

  return (
    <Wrapper>
      <FormControl>
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
      </FormControl>
    </Wrapper>
  )
} 

export default CoinSelect;
