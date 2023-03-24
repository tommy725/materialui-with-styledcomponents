import { Box } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  line-height: 1;
  text-align: center;
  z-index: 1;

  p {
    line-height: 1;
    color: white;
    font-size: 1rem;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
    margin-top: 0.4375rem;
  }
`;

export const Image = styled.img`
  width: 3.25rem;
  height: 3.25rem;
`;