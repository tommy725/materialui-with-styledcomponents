import { Box } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  line-height: 1;
  text-align: center;
  z-index: 1;

  p {
    line-height: 1;
    color: white;
    font-size: 16px;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin-top: 7px;
  }
`;

export const Image = styled.img`
  width: 52px;
  height: 52px;
`;