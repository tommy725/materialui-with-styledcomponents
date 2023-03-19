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
      font-size: 20px;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
      margin-right: 20px;
      text-transform: initial;
    }

    .arrow-up {
      ${'' /* transform: rotate(180deg);  */}
      transition: transform 150ms ease;
    }

    .arrow-down {
      transform: rotate(180deg); 
      transition: transform 150ms ease;
    }
  }

  .routes {
    height: wrap-content;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    padding: 0 40px;
    position: relative;

    .dot-line {
      width: calc(100% - 40px * 2);
      left: 40px;
      right: 40px;
      top: 26px;
      position: absolute;
      z-index: 0;
    }
  }
`;