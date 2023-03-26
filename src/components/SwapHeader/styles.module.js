import styled from 'styled-components';
import { Typography, IconButton, Container } from '@material-ui/core';

export const Wrapper = styled(Container)`
  padding : 0;

  .header-container { 
    width: 100%;
    height: 5.625rem;
    align-items: center;
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
    background-color: #444647;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 1.75rem;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
  margin-left: 2.5rem;
  margin-bottom: 0;
`;

export const SettingButton = styled(IconButton)`
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 1.25rem
`;
