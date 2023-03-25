import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  width: 100%;
  ${'' /* display: flex; */}
  max-width: 100%;
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
    max-width: 49.25rem;
    width: 60%;
    min-width: 33.75rem;
    height: fit-content;
    background-color: #313631;
    border-radius: 1.875rem;
    padding-left: 0;
    padding-right: 0;
    position: inherit;

    .swap-body {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      padding-bottom: 2.5rem;

      .coin-type {
        align-items: flex-end;
        display: flex;
        position: relative;

        .wave-anim {
          position: absolute;
          left: 11.875rem;
          right: 11.875rem;
          top: 2.5rem;
          height: 5.9375rem;
        }
      }

      .amount-group {
        margin-top: 3.125rem;
      }

      .other-routes {
        margin-top: 2.125rem;
      }
    }
  }
`;