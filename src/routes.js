import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./lib/constants";

import Tab1 from "./pages/Tab1";
import Tab3 from "./pages/Tab3";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Tab1} />
      <Route path={ROUTES.TAB1} exact component={Tab1} />
      <Route path={ROUTES.TAB3} exact component={Tab3} />
      <Redirect to={ROUTES.TAB1} />
    </Switch>
  );
}
