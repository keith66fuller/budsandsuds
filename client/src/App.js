import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Buds from "./pages/Buds";
import Crawls from "./pages/Crawls";
import Pubs from "./pages/Pubs";


import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PasswordForget from "./pages/PasswordForget";
import Account from "./pages/Account";
import withAuthentication from "./components/firebaseComp/withAuthentication"
import * as routes from "./constants/routes";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/pw-forget" component={PasswordForget} />
        <Route exact path="/account" component={Account} />

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

export default withAuthentication(App);
// export default App;