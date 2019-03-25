import React from "react";

import UserGrid from "../components/UserGrid";
import { MainLayout, Container } from "../components/Layout";

const DevelopersPage = () => {
  return (
    <MainLayout>
      <Container>
        <p class="pt5 pb4 f4 f3-m mt0 db w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6">
          All developers
        </p>
        <UserGrid />
      </Container>
    </MainLayout>
  );
};

export default DevelopersPage;
