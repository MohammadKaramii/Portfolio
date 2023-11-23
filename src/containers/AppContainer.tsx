import { useState } from "react";

import { Typography } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/Sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Home, About, Skills } from "../pages";
function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (_event: React.SyntheticEvent, newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0} >
          <Home />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
          <About />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
<Skills />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نمونه کارها
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
