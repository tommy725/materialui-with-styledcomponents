import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { Wrapper, Title, SettingButton } from './styles';
import SettingSvg  from '../../assets/images/setting.svg'

const Header = () => {
  return (
    <Wrapper>
      <Container class="header-container">
        <Title>
          Cross-Chain Swaps
        </Title>
        <SettingButton variant="contained">
          <img src={SettingSvg} alt='Setting' />
        </SettingButton>
      </Container>
    </Wrapper>
  );
}
  
export default Header;
  
