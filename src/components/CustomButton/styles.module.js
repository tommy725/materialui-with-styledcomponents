import { Button, Box } from "@material-ui/core";
import styled from "styled-components";

export const ButtonWrapper = styled(Box)`

  .MuiButton-root {
    width: 100%;
    height: 3.75rem;
    background: #33FF00;
    border-radius: 0.375rem;
    color: #181B18;
    font-size: 1.25rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin: 0;
    text-align: center;    
    text-transform: initial;
  }

  .MuiButton-root.swap {
    min-width: 3.75rem;
    background: #33FF00;
    border: none;
    border-radius: 0.6875rem;
  }

  .MuiButton-startIcon { 
    margin-left: 0.375rem;
    margin-right: 1.104375rem;
  }

  .swap .MuiButton-startIcon { 
    margin-left: 0;
    margin-right: 0;
  }
`;