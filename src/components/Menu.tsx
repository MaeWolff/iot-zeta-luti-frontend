import React from "react";
import { useLocation, BrowserRouter as Router } from "react-router-dom";

export default function Menu() {
  const router = useLocation();

  console.log(router.pathname);

  return <Router>menu</Router>;
}
