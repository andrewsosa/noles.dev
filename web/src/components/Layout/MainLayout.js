import React, { Fragment } from "react";
import Container from "./Container";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => (
  <Fragment>
    {/* Start with Navbar */}
    <Container>
      <Navbar />
    </Container>

    {/* Then the children */}
    {children}

    {/* Then the footer */}
    <Footer />
  </Fragment>
);

export default MainLayout;
