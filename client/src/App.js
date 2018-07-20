import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Buds from "./pages/Buds";
import Crawls from "./pages/Crawls";
import Pubs from "./pages/Pubs";
import DbAdmin from "./pages/DbAdmin";
// import SearchTest from "./pages/SearchTest/SearchTest";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Buds" component={Buds} />
        <Route exact path="/Crawls" component={Crawls} />
        {/* <Route exact path="/Test" component={SearchTest} /> */}
        <Route exact path="/Pubs" component={Pubs} />
        <Route exact path="/DbAdmin" component={DbAdmin} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
