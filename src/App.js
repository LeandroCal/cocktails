import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import { DataProvider } from "./context/DataContext";
import Routes from "./routes";
import { HOMEPAGE } from "./lib/constants";

import Layout from "./containers/Layout";

function App() {
  return (
    <Router basename={HOMEPAGE}>
      <ModalProvider>
        <DataProvider>
          <Layout>
            <Routes />
          </Layout>
        </DataProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
