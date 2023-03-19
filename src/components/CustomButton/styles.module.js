import { Button, Box } from "@material-ui/core";
import styled from "styled-components";

export const ButtonWrapper = styled(Box)`

  .MuiButton-root {
    width: 100%;
    height: 6rem;
    background: #2FED00;
    border: 0.1rem solid #46FF18;
    border-radius: 0.6rem;
    color: #181B18;
    font-size: 2rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin: 0;
    text-align: center;    
    text-transform: initial;
  }

  .MuiButton-root.swap {
    min-width: 6rem;
    background: #33FF00;
    border: none;
    border-radius: 1.1rem;
  }

  .MuiButton-startIcon { 
    margin-left: 0.6rem;
    margin-right: 1.767rem;
  }

  .swap .MuiButton-startIcon { 
    margin-left: 0;
    margin-right: 0;
  }
`;