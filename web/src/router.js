import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
