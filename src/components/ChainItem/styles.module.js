import { Container, Box } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: block;
  padding: 45px;
  padding-top: 70px;
  padding-bottom: 20px;
  text-align: center;
`;

export const FlexBox = styled(Box)`
  display: flex;
`;

export const IconImage = styled.img`
  width: 144px;
  max-width: none;
  height: 144px;
  box-shadow: 0px -15px 30px 0px #33ff0070;
  border-radius: 50%;
  border-color:#33ff00;
  border-style: solid;
  border-width: 1px 0px 2px 0px;
  position: absolute;
  z-index: 1;
`;

export const RightBox = styled(Box)`
  width: 100%;
  margin-left: 50px;
  position: relative;
`