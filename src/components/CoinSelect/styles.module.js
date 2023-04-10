import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

import ArrowDownWhiteSvg from "../../assets/images/arrow-down-white.svg"
import ArrowDownPrimarySvg from "../../assets/images/arrow-down-primary.svg"

export const Wrapper = styled(Box)`
  padding: 0;

  .MuiFormControl-root {
    height: ${({ theme }) => theme.size.button.height};

    .MuiInput-formControl {
      height: ${({ theme }) => theme.size.button.height};
      border: 0.0625rem solid #555555;
      border-radius: 0.625rem;

      ::before, ::after {
        display: none;
      }

      .MuiInput-input {
        height: ${({ theme }) => theme.size.button.height};
        line-height: ${({ theme }) => theme.size.button.height};
        align-items: center;
        display: flex;
        padding: 0 1.25rem;
        text-align: left;

        img.no-icon {
          display: none;
        }

        p {
          color: white;
          display: inline;
          font-size: 1.25rem;
          letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
          padding-top: 0.125rem;
        }

        ::after {
          position: absolute; 
          top: 1.125rem;
          right: 1.25rem;
          width: 1.5rem;
          height: 1.5rem;
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

export const Label = styled(Typography)`
  color: #828282;
  font-size: 20px;
  left: 5px;
  position: absolute;
  top: -30px;
`;