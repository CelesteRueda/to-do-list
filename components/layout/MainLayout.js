import React from "react";
import NavBar from "./NavBar";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
