import { FormControl } from "@material-ui/core";
import styled from "styled-components";

export const FormControlWrapper = styled(FormControl)`
  width: 100%;
  height: ${({ theme }) => theme.size.button.height};

  .MuiInput-formControl {
    height: ${({ theme }) => theme.size.button.height};
    border: 1px solid white;
    border-radius: 10px;

    ::before, ::after {
      display: none;
    }

    .MuiInput-input {
      height: ${({ theme }) => theme.size.button.height};
      line-height: ${({ theme }) => theme.size.button.height};
      color: white;
      font-size: 20px;
      margin-left: 20px;
      padding: 0;
      text-align: left;
    }
  }
`;