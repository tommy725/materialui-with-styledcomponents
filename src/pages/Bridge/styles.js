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

export const CurvedLine = styled.div`
  height: 100px;
  width: 200px;
  background: transparent;
  border-radius: 0px 0px 0px 370px/225px;
  border: solid 5px grey;
  border-top:none;
  border-right:none;
  margin:20px;

  ::before {
    height:20px;
    width: 10px;
    border: 5px solid grey;
    border-radius: 30px 30px 0px 0px /75px 75px 0px 0px ; 
    display: block;
    content: "";
    border-bottom:none;
    position:relative;
    top: -9px;
    left: -12px;
  } 
`;