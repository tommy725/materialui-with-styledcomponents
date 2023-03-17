import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  width: 788px;
  height: 921px;
  background-color: #313631;
  border-radius: 30px;
  margin-top: 31px;
  padding-left: 0;
  padding-right: 0;

  .body {
    padding-left: 40px;
    padding-right: 40px;

    .coin-type {
      align-items: flex-end;
      display: flex;

      .swap-btn {
        margin 0 24px;
      }
    }

    .amount-group {
      margin-top: 50px;
    }

    .other-routes {
      margin-top: 34px;
    }
  }
`;