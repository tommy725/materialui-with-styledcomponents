import { Box } from "@material-ui/core";
import styled from "styled-components";

import ArrowDownWhiteSvg from "../../assets/images/arrow-down-white.svg"
import ArrowDownPrimarySvg from "../../assets/images/arrow-down-primary.svg"

export const Wrapper = styled(Box)`
  padding: 0;

  .MuiFormControl-root {
    width: 100%;
    height: ${({ theme }) => theme.size.button.height};

    .MuiInput-formControl {
      height: ${({ theme }) => theme.size.button.height};
      border: 0.1rem solid white;
      border-radius: 1rem;

      ::before, ::after {
        display: none;
      }

      .MuiInput-input {
        height: ${({ theme }) => theme.size.button.height};
        line-height: ${({ theme }) => theme.size.button.height};
        align-items: center;
        display: flex;
        padding: 0 2rem;
        text-align: left;

        img.no-icon {
          display: none;
        }

        p {
          color: white;
          display: inline;
          font-size: 2rem;
          letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
          padding-top: 0.2rem;
        }

        ::after {
          position: absolute; 
          top: 1.8rem;
          right: 2rem;
          width: 2.4rem;
          height: 2.4rem;
          content: '';
          background-image: url(${ArrowDownWhiteSvg});
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }

      }

      svg {
        display: none;
      }
    }

    .no-border {
      border: none;

      .MuiInput-input {
        ::after {
          background-image: url(${ArrowDownPrimarySvg});
        }      
      }
    }
  }
`;