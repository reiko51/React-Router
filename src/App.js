import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import { Page2DetailC } from "./Page2DetailC";
import { Page2DetailD } from "./Page2DetailD";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          // render={(props) => (
          render={({ match: { url } }) => (
            <Switch>
              {/* {console.log(url)} */}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
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
    </BrowserRouter>
  );
}
