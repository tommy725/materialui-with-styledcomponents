import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 0;
  
  .title {
    margin: 0;
    padding: 0;

    p {
      color: #33FF00;
      font-size: 20px;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
      text-transform: initial;
    }

    .arrow-down {
      margin-left: 20px;
    }
  }

  .routes {
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