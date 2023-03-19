import { Box } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    display: block;

    .line {
      fill: none;
    }

    .line {
      animation: loop 3s linear infinite;
      border-radius: 30rem;
      stroke: #00FF00;
      stroke-width: 0.6rem;
      stroke-dasharray: 40rem, 460rem;
      stroke-linecap: round;
    }
    
    .line.behind {
      stroke: #33FF00;
      filter: blur(1rem);
      stroke-width: 0.8rem;
    }

    .line2, .line6 {
      animation-delay: 0.6s;
    }
    
    .line3, .line7 {
      stroke-dasharray: 25rem, 475rem;
      animation-delay: 0.9s;
    }

    .line4, .line8 {
      animation-delay: 1.2s;
    }

    @keyframes loop {
      0% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: -500rem;
      }
    }
  }
  
`;


