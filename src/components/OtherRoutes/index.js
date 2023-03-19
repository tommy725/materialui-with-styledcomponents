import React, {useState} from "react";
import { Container, Box, Typography, Button, Collapse } from "@material-ui/core";

import { ReactComponent as ArrowDownSvg } from "../../assets/images/arrow-down-primary.svg"
import { ReactComponent as DotLineSvg} from "../../assets/images/dot-line.svg"
import DeBridgeSvg from "../../assets/images/debridge.svg"
import OneInchSvg from "../../assets/images/1inch.svg"

import { Wrapper } from "./styles.module";

import RouteItem from "./RouteItem";

const OtherRoutes = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsedEvent = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Wrapper>
      <Button className="title" onClick={ handleCollapsedEvent }>
        <Typography>Other Routes</Typography>
        
        <ArrowDownSvg className={ collapsed ? "arrow-up": "arrow-down" } />
      </Button>

      <Collapse in={ !collapsed }>
        <Container className={ "routes" }>
          <DotLineSvg className="dot-line" />
          <RouteItem image={ OneInchSvg } title="1inch" />
          <RouteItem image={ DeBridgeSvg } title="deBridge" />
          <RouteItem image={ OneInchSvg } title="1inch" />
        </Container>
      </Collapse>
      
    </Wrapper>
  );
}

export default OtherRoutes;