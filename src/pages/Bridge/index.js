/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const Wrapper = styled(Container)`
  width: 788px;
  height: 921px;
  background-color: ${({ theme }) => theme.palette.dialog.background};
  border-radius: 30px;
  margin-top: 31px;
`;

function Bridge() {
  return (
    <Wrapper>
      
    </Wrapper>
  );
}

export default Bridge;
