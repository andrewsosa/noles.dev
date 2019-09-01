import React, { Fragment } from "react";
import Container from "./Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SEO from "../seo";

import "tachyons/css/tachyons.css";

import "../../styles/fonts.css";
import "../../styles/normalize.css";
import "../../styles/dimen.css";
import "../../styles/type.css";
import "../../styles/colors.css";

const MainLayout = ({ children }) => (
  <div className="graphik min-vh-100 relative">
    {/* Start with Navbar */}
    <SEO />
    <Container>
      <Navbar />
    </Container>

    {/* Then the children */}
    {children}

    {/* Then the footer */}
    <Footer />
  </div>
);

export default MainLayout;
