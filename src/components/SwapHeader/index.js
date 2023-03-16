import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HeaderEl, Title, SettingButton } from './styles';
import SettingSvg  from '../../assets/images/setting.svg'

function Header() {
    return (
      <HeaderEl>
        <Title>
          Cross-Chain Swaps
        </Title>
        <SettingButton variant="contained">
          <img src={SettingSvg} alt='Setting' />
        </SettingButton>
      </HeaderEl>
    );
  }
  
export default Header;
  
