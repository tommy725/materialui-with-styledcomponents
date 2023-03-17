import React from "react";
import { Select, MenuItem, Box} from "@material-ui/core"
import { FormControlWrapper } from './styles'
import { useSelector, useDispatch } from "react-redux";

function CoinSelect(props) {
  const {
    coinIdx,
    marginTop,
    handleChangeCoin
  } = props;

  const coinList = useSelector(state => state.bridge.coinList);

  return (
    <Box sx={{marginTop: marginTop}}>
      <FormControlWrapper>
        <Select
          value={coinIdx}
          onChange={handleChangeCoin}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
        {coinList &&
          coinList.map((item, idx) => (
            <MenuItem value={idx}>{item.name}</MenuItem>
          ))
        }
        </Select>
      </FormControlWrapper>
    </Box>
  )
} 

export default CoinSelect;
