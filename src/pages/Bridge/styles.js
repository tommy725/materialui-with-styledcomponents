import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  max-width: 788px;
  width: 60%;
  min-width: 540px;
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
      position: relative;

      .swap-btn {
        margin 0 24px;
      }

      .wave-anim {
        position: absolute;
        left: 30%;
        right: 30%;
        top: 40px;
        height: 95px;
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