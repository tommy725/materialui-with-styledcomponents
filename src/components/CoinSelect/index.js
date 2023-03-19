import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Box, Typography} from "@material-ui/core"

import { Wrapper } from './styles.module'

const CoinSelect = (props) => {
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
            <MenuItem value={idx}>
              <img className={ noIcon ? "no-icon" : ""} src={item.image} style={{ width: "2rem", height: "2rem", marginRight: "1rem", verticalAlign: "middle" }} alt=""/>
              <Typography>{item.name}</Typography>
            </MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </Wrapper>
  )
} 

export default CoinSelect;
