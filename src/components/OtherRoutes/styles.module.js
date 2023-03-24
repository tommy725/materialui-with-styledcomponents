import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 0;
  
  .title {
    border-radius: 0;
    margin: 0;
    padding: 0;

    p {
      color: #33FF00;
      font-size: 1.25rem;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
      margin-right: 1.25rem;
      text-transform: initial;
    }

    .arrow-up {
      width: 1.5rem;
      height: 1.5rem;
      transition: transform 150ms ease;
    }

    .arrow-down {
      width: 1.5rem;
      height: 1.5rem;
      transform: rotate(180deg); 
      transition: transform 150ms ease;
    }
  }

  .routes {
    height: wrap-content;
    display: flex;
    justify-content: space-between;
    margin-top: 1.4375rem;
    padding: 0 2.5rem;
    position: relative;

    .dot-line {
      width: calc(100% - 2.5rem * 2);
      left: 2.5rem;
      right: 2.5rem;
      top: 1.625rem;
      position: absolute;
      z-index: 0;
    }
  }
`;