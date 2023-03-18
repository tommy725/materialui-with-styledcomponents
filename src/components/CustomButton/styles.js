import { Button, Box } from "@material-ui/core";
import styled from "styled-components";

export const ButtonWrapper = styled(Box)`

  .MuiButton-root {
    width: 100%;
    height: 60px;
    background: #2FED00;
    border: 1px solid #46FF18;
    border-radius: 6px;
    color: #181B18;
    font-size: 20px;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin: 0;
    text-align: center;    
    text-transform: initial;
  }

  .MuiButton-root.swap {
    min-width: 60px;
    background: #33FF00;
    border: none;
    border-radius: 11px;
  }

  .MuiButton-startIcon { 
    margin-left: 6px;
    margin-right: 17.67px;
  }

  .swap .MuiButton-startIcon { 
    margin-left: 0;
    margin-right: 0;
  }
`;