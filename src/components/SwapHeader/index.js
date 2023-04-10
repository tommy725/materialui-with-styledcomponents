import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { Wrapper, Title, SettingButton } from './styles.module';
import SettingSvg from '../../assets/images/setting.png'

const Header = () => {
  return (
    <Wrapper>
      <Container class="header-container">
        <div style={{ width: '3.75rem', height: '3.75rem', maginLeft: '1.25rem' }}> </div>
        <Title>
          Cross-Chain Bridge
        </Title>
        <SettingButton variant="contained">
          <img src={SettingSvg} alt='Setting' />
        </SettingButton>
      </Container>
    </Wrapper>
  );
}

export default Header;

