import React, {useState} from "react";
import { Typography } from "@material-ui/core";

import { Wrapper, Image } from "./styles.module";

const RouteItem = (props) => {
  const {
    image,
    title,
  } = props;
  return (
    <Wrapper>
      <Image src={ image } />
      <Typography>{ title }</Typography>
    </Wrapper>
  );
}

export default RouteItem;