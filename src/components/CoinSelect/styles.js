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
      align-items: center;
      display: flex;
      padding: 0 20px;
      text-align: left;

      img {
        width: 20px;
        height: 20px;
        display: initial !important;
        margin-right: 10px;
        vertical-align: middle;
      }

      p {
        color: white;
        display: inline;
        font-size: 20px;
        padding-top: 2px
      }
    }
  }

  .no-border {
    border: none;
  }
`;