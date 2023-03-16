/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import SwapHeader from '../../components/SwapHeader';

const Wrapper = styled(Container)`
  width: 788px;
  height: 921px;
  background-color: #313631;
  border-radius: 30px;
  margin-top: 31px;
  padding-left: 0;
  padding-right: 0;
`;

function Bridge() {
  return (
    <Wrapper>
      <SwapHeader />
    </Wrapper>
  );
}

export default Bridge;
