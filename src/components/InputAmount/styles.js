import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 0;
  margin-top: 30px;

  .title {
    color: white;
    font-size: 16px;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    line-height: 1;
  }

  .input-field {
    height: ${({ theme }) => theme.size.button.height};
    display: flex;
    margin-top: 14px;

    .amount {
      width: 100%;
      border: 1px solid white;
      border-right: none;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;

      ::before, ::after {
        display: none;
      }

      input {
        color: white;
        font-size: 20px;
        letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
        padding: 0 20px;
      }     
    }

    .coin-select {
        width: 240px;
        min-width: 240px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid #33FF00;
      }
  }

  .sub-title {
    line-height: 1;
    color: #B7B7B7;
    font-size: 14px;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin-top: 12px;
    text-align: end;
  }
`;