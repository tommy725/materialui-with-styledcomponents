import React from "react";
import { useLocation } from "react-router-dom";
import HeaderLogged from "../components/Header/HeaderLogged";

const SiteHeader = () => {
  let location = useLocation();

  return location.pathname === <HeaderLogged />;
};

export default SiteHeader;
