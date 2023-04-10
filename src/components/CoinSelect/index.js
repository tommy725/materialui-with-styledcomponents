import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, Box, Typography } from "@material-ui/core"

import { Label, Wrapper } from './styles.module'

const CoinSelect = (props) => {
  const {
    coinIdx,
    handleChangeCoin,
    noBorder,
    noIcon,
    label,
    width
  } = props;

  const coinList = useSelector(state => state.bridge.coinList);

  return (
    <Wrapper sx={{ width: `${width}px` }}>
      <FormControl className="w-full">
        <Label>{label}</Label>
        <Select
          className={noBorder ? "no-border" : ""}
          value={coinIdx}
          onChange={handleChangeCoin}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {coinList &&
            coinList.map((item, idx) => (
              <MenuItem value={idx}>
                <img className={noIcon ? "no-icon" : ""} src={item.image} style={{ width: "2rem", height: "2rem", marginRight: "1rem", verticalAlign: "middle", border: '1px solid #33ff0040', borderRadius: '50%' }} alt="" />
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
