import React, { Component } from "react";
import Banner from "../../components/Banner";
import Dashboard from "../../components/Dashboard";
import Message from "../../components/Message";
import Welcome from "../../components/Welcome";
class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <Dashboard />
        <Message image="./images/background6.jpg" alt="Unsplashed background img 6" />
        <Welcome />
        <Message image="./images/background5.jpg" alt="Unsplashed background img 5" />
      </React.Fragment>
    )
  }

};

export default Home;
