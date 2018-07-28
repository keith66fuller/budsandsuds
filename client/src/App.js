import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Buds from "./pages/Buds";
import Crawls from "./pages/Crawls";
import Pubs from "./pages/Pubs";


import * as routes from "./constants/routes";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/buds" component={Buds} />
        <Route exact path="/crawls" component={Crawls} />
        <Route exact path="/pubs" component={Pubs} />

        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;