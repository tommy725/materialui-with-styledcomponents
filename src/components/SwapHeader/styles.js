import styled from 'styled-components';
import { Typography, IconButton } from '@material-ui/core';

export const HeaderEl = styled.div`
  width: 100%;
  height: 90px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #444647;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 31px;
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-left: 40px;
  margin-bottom: 0;
`;

export const SettingButton = styled(IconButton)`
  width: 60px;
  height: 60px;
  margin-right: 20px
`;
