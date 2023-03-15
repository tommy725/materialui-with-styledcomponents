import { Container } from '@material-ui/core';
import { animated, config } from 'react-spring';

export const enterContainerProps = {
  opacity: 1,
  marginBottom: 60,
  marginTop: '0px',
  from: { opacity: 0, marginTop: '-50px' },
  config: config.slow,
};

export const AnimatedContainer = animated(Container);
