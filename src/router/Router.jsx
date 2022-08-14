import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page2DetailC } from "../Page2DetailC";
import { Page2DetailD } from "../Page2DetailD";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        // render={(props) => (
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* <Route path="/page2" render={() => <Page2 />} /> */}
      {/* renderの中のreturnの中が複数になるので、()で囲む */}
      <Route
        path="/page2"
        render={() => (
          <Switch>
            <Route exact path="/page2">
              <Page2 />
            </Route>
            <Route path="/page2/detailC">
              <Page2DetailC />
            </Route>
            <Route path="/page2/detailD">
              <Page2DetailD />
            </Route>
          </Switch>
        )}
      />
    </Switch>
  );
};
