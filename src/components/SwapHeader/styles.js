import styled from 'styled-components';
import { Typography, IconButton, Container } from '@material-ui/core';

export const Wrapper = styled(Container)`
  width: 100%;
  height: 90px;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #444647;
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
  padding-left: 0;
  padding-right: 0;
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 28px;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
  margin-left: 40px;
  margin-bottom: 0;
`;

export const SettingButton = styled(IconButton)`
  width: 60px;
  height: 60px;
  margin-right: 20px
`;
