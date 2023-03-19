import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 0;
  margin-top: 3rem;

  .title {
    color: white;
    font-size: 1.6rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    line-height: 1;
  }

  .input-field {
    height: ${({ theme }) => theme.size.button.height};
    display: flex;
    margin-top: 1.4rem;

    .amount {
      width: 100%;
      background: transparent;
      border: 0.1rem solid white;
      border-right: none;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 1rem;
      color: white;
      font-family:${({ theme }) => theme.typography.fontFamily};
      font-size: 2rem;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
      padding: 0 2rem;
    }

    .coin-select {
        width: 24rem;
        min-width: 24rem;
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;
        border: 0.1rem solid #33FF00;
      }
  }

  .sub-title {
    line-height: 1;
    color: #B7B7B7;
    font-size: 1.4rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin-top: 1.2rem;
    text-align: end;
  }
`;