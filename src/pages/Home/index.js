/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Typography } from '@material-ui/core';
import { useSpring } from 'react-spring';
import { enterContainerProps, AnimatedContainer } from '../../utils/animation';

function Home() {
  const animation = useSpring(enterContainerProps);
  return (
    <AnimatedContainer style={animation}>
      <Typography variant="h4" gutterBottom>
        State Management & Input Fields
      </Typography>
    </AnimatedContainer>
  );
}

export default Home;
