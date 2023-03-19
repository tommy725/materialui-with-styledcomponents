import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 0;

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
  /* Styles */
    .container {
      max-width: 100vw important;
      width: 100vw !important;
      min-width: 100vw !important;
      border-radius: 0 !important;
    }
  }

  /* iPhone 4 ----------- */
  @media
  only screen and (-webkit-min-device-pixel-ratio : 1.5),
  only screen and (min-device-pixel-ratio : 1.5) {
    .container {
      max-width: 100vw important;
      width: 100vw !important;
      min-width: 100vw !important;
      border-radius: 0 !important;
    }
  }

  .container {
    max-width: 78.8rem;
    width: 60%;
    min-width: 54rem;
    height: wrap-content;
    background-color: #313631;
    border-radius: 3rem;
    margin-top: 3.1rem;
    padding-left: 0;
    padding-right: 0;

    .swap-body {
      padding-left: 4rem;
      padding-right: 4rem;
      padding-bottom: 4rem;

      .coin-type {
        align-items: flex-end;
        display: flex;
        position: relative;

        .wave-anim {
          position: absolute;
          left: 19rem;
          right: 19rem;
          top: 4rem;
          height: 9.5rem;
        }
      }

      .amount-group {
        margin-top: 5rem;
      }

      .other-routes {
        margin-top: 3.4rem;
      }
    }
  }
`;