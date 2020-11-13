import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./containers/Home";
import AboutPYLON from "./containers/AboutPYLON";
import Partners from "./containers/Partners";
import YCRVVault from "./containers/YCRVVault";
import PYLONVault from "./containers/PYLONVault";
import FDIVault from "./containers/FDIVault";

const PublicRoutes = ({ match }) => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${match.url}`} component={Home} />
        <Route exact path={`${match.url}/home`} component={Home} />
        <Route exact path={`${match.url}/about-pylon`} component={AboutPYLON} />
        <Route exact path={`${match.url}/ycrv-vault`} component={YCRVVault} />
        <Route exact path={`${match.url}/fdi-vault`} component={FDIVault} />
        <Route exact path={`${match.url}/pylon-vault`} component={PYLONVault} />
        <Route exact path={`${match.url}/partners`} component={Partners} />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicRoutes;
