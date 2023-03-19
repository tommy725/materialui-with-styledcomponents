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
      font-size: 2rem;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
      margin-right: 2rem;
      text-transform: initial;
    }

    .arrow-up {
      width: 2.4rem;
      height: 2.4rem;
      transition: transform 150ms ease;
    }

    .arrow-down {
      width: 2.4rem;
      height: 2.4rem;
      transform: rotate(180deg); 
      transition: transform 150ms ease;
    }
  }

  .routes {
    height: wrap-content;
    display: flex;
    justify-content: space-between;
    margin-top: 2.3rem;
    padding: 0 4rem;
    position: relative;

    .dot-line {
      width: calc(100% - 4rem * 2);
      left: 4rem;
      right: 4rem;
      top: 2.6rem;
      position: absolute;
      z-index: 0;
    }
  }
`;