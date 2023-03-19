import styled from 'styled-components';
import { Typography, IconButton, Container } from '@material-ui/core';

export const Wrapper = styled(Container)`
  padding : 0;

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
  /* Styles */
    .header-container {
      border-radius: 0 !important;
    }
  }

  /* iPhone 4 ----------- */
  @media
  only screen and (-webkit-min-device-pixel-ratio : 1.5),
  only screen and (min-device-pixel-ratio : 1.5) {
  /* Styles */
    .header-container {
      border-radius: 0 !important;
    }
  }

  .header-container { 
    width: 100%;
    height: 9rem;
    align-items: center;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    background-color: #444647;
    display: flex;
    justify-content: space-between;
    margin-top: 3.1rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 2.8rem;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
  margin-left: 4rem;
  margin-bottom: 0;
`;

export const SettingButton = styled(IconButton)`
  width: 6rem;
  height: 6rem;
  margin-right: 2rem
`;
