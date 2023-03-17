import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  width: 100%;
  height: wrap-content;
  display: block;
  text-align: center;
  padding-left: 0;
  padding-right: 0;

  div.image-container {
    width: 95px;
    height: 95px;
    align-items: center;
    background-color: white;
    ${'' /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */}
    ${'' /* box-shadow: rgba(51, 255, 0, 0.05) 0px 6px 24px 0px, rgba(51, 255, 0, 0.08) 0px 0px 0px 1px; */}
    ${'' /* box-shadow: rgba(51, 255, 0, 0.3) 0px 1px 2px 0px, rgba(51, 255, 0, 0.15) 0px 2px 6px 2px; */}
    ${'' /* box-shadow: rgba(51, 255, 0, 0.2) 0px 7px 29px 0px; */}
    ${'' /* box-shadow: rgba(51, 255, 0, 0.07) 0px 1px 2px, rgba(51, 255, 0, 0.07) 0px 2px 4px, rgba(51, 255, 0, 0.07) 0px 4px 8px, rgba(51, 255, 0, 0.07) 0px 8px 16px, rgba(51, 255, 0, 0.07) 0px 16px 32px, rgba(51, 255, 0, 0.07) 0px 32px 64px; */}
    ${'' /* box-shadow: rgba(51, 255, 0, 0.05) 0px 6px 24px 0px, rgba(51, 255, 0, 0.08) 0px 0px 0px 1px; */}
    box-shadow: rgba(51, 255, 0, 0.05) 0px 6px 24px 0px, rgba(51, 255, 0, 1) 0px 0px 0px 1px;
    border-radius: 18px;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    margin-top: 40px;
  }  
`;