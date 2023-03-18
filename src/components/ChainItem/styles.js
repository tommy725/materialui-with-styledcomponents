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
    display: inline-flex;
    line-height: normal;
    margin-top: 40px;
    position: relative;
    
    .MuiBox-root {
      width: 100%;
      height: 100%;
      align-items: center;
      background-color: white;
      box-shadow: rgba(51, 255, 0, 0.25) 0px 8px 50px;
      ${'' /* box-shadow: rgba(51, 255, 0, 0.05) 0px 6px 24px 0px, rgba(51, 255, 0, 1) 0px 0px 0px 1px; */}
      border-radius: 18px;
      display: flex;
      justify-content: center;
      z-index: 1;
    }

    .ripple {
      animation-delay: -1500ms;
    }

    .ripple:nth-of-type(1) {
      animation-delay: -1250ms;
    }

    .ripple:nth-of-type(2) {
      ${'' /* animation-delay: -2000ms; */}
      animation-delay: -1000ms;
    }  
  }
`;

export const RippleAnimView = styled.div`
  width: 100%;
  height: 100%;
  animation: ripple 2s linear infinite;
  background-color: transparent;
  border: 1px solid #33FF00;
  border-radius: 18px;
  position: absolute;
  z-index: 0;

  @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }

      75% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(1.7);
        opacity: 0;
      }
    }  
`;