import React, { Component } from "react";
import Banner from "../../components/Banner";
import PubsComp from "../../components/PubsComp";
import Maps from "../../components/Maps";
import { Link } from 'react-router';
import Footer from "../../components/Footer";

class Pubs extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <PubsComp />
        <Maps />
        {/* <Footer /> */}
      </React.Fragment>
    )
  }

};

export default Pubs;