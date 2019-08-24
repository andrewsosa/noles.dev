import React from "react";

import UserGrid from "../components/UserGrid";
import { MainLayout, Container } from "../components/Layout";

const DevelopersPage = () => {
  return (
    <MainLayout>
      <Container>
        <p class="w-100 pt5 pb4 db f1 lh-title measure mb4 fw6">
          All developers
        </p>
        <UserGrid />
      </Container>
    </MainLayout>
  );
};

export default DevelopersPage;
