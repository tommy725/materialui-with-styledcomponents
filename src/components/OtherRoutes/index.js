import React, {useState} from "react";
import { Typography, Button, Container } from "@material-ui/core";

import { ReactComponent as ArrowDownSvg } from "../../assets/images/arrow-down-primary.svg"
import { ReactComponent as DotLineSvg} from "../../assets/images/dot-line.svg"
import DeBridgeSvg from "../../assets/images/debridge.svg"
import OneInchSvg from "../../assets/images/1inch.svg"

import { Wrapper } from "./styles";

import RouteItem from "./RouteItem";

function OtherRoutes() {
  return (
    <Wrapper>
      <Button className="title">
        <Typography>Other Routes</Typography>
        <ArrowDownSvg className="arrow-down" />
      </Button>

      <Container className="routes">
        <DotLineSvg className="dot-line" />
        <RouteItem image={ OneInchSvg } title="1inch" />
        <RouteItem image={ DeBridgeSvg } title="deBridge" />
        <RouteItem image={ OneInchSvg } title="1inch" />
      </Container>
      
    </Wrapper>
  );
}

export default OtherRoutes;