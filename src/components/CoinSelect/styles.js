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
      border: 1px solid white;
      border-radius: 10px;

      ::before, ::after {
        display: none;
      }

      .MuiInput-input {
        height: ${({ theme }) => theme.size.button.height};
        line-height: ${({ theme }) => theme.size.button.height};
        align-items: center;
        display: flex;
        padding: 0 20px;
        text-align: left;

        img {
          width: 20px;
          height: 20px;
          display: initial !important;
          margin-right: 10px;
          vertical-align: middle;
        }

        p {
          color: white;
          display: inline;
          font-size: 20px;
          letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
          padding-top: 2px
        }

        ::after {
          position: absolute; 
          top: 18px;
          right: 20px;
          width: 24px;
          height: 24px;
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