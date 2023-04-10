import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  width: 100%;
  ${'' /* display: flex; */}
  max-width: 100%;
  padding: 0;

  
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen 
  ${'' /* and (min-device-width : 320px)  */}
  and (max-device-width : 540px) {
  /* Styles */
    .bridge-container {
      max-width: calc(100vw - 5rem) important;
      width: calc(100vw - 5rem) !important;
      min-width: 284px !important;
    }
  }

  .bridge-container {
    max-width: 49.25rem;
    width: 60%;
    min-width: 33.75rem;
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
