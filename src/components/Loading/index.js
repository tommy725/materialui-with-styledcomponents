import React from 'react';
import styled from 'styled-components';
import { Container, CircularProgress } from '@material-ui/core';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
}

export default Loading;
