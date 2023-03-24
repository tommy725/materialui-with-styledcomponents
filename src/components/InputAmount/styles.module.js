import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 0;
  margin-top: 1.875rem;

  .title {
    color: white;
    font-size: 1rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    line-height: 1;
  }

  .input-field {
    height: ${({ theme }) => theme.size.button.height};
    display: flex;
    margin-top: 0.875rem;

    .amount {
      width: 100%;
      background: transparent;
      border: 0.0625rem solid white;
      border-right: none;
      border-bottom-left-radius: 0.625rem;
      border-top-left-radius: 0.625rem;
      color: white;
      font-family:${({ theme }) => theme.typography.fontFamily};
      font-size: 1.25rem;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
      padding: 0 1.25rem;
    }

    .coin-select {
        width: 15rem;
        min-width: 15rem;
        border-bottom-right-radius: 0.625rem;
        border-top-right-radius: 0.625rem;
        border: 0.0625rem solid #33FF00;
      }
  }

  .sub-title {
    line-height: 1;
    color: #B7B7B7;
    font-size: 0.875rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin-top: 0.75rem;
    text-align: end;
  }
`;