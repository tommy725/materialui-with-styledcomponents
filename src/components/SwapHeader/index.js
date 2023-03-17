import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Title, SettingButton } from './styles';
import SettingSvg  from '../../assets/images/setting.svg'

function Header() {
    return (
      <Wrapper>
        <Title>
          Cross-Chain Swaps
        </Title>
        <SettingButton variant="contained">
          <img src={SettingSvg} alt='Setting' />
        </SettingButton>
      </Wrapper>
    );
  }
  
export default Header;
  
