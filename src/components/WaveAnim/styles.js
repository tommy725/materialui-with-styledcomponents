import { Box } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    display: block;

    .path-bg, .line {
      fill: none;
    }

    .path-bg {
      stroke-width: 50px;
      stroke: #87AEAF;
      stroke-opacity: 0.3;
    }

    .line {
      animation: loop 3s linear infinite;
      border-radius: 300px;
      stroke: #33FF00;
      stroke-width: 6px;
      stroke-dasharray: 400px, 4600px;
      stroke-linecap: round;
    }

    .line2 {
      animation-delay: 0.6s;
    }
    
    .line3 {
      stroke-dasharray: 250px, 4750px;
      animation-delay: 0.9s;
    }

    .line.line4 {
      animation-delay: 1.2s;
    }

    @keyframes loop {
      0% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: -5000px;
      }
    }
  }
  
`;


