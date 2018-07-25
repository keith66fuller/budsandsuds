import React, { Component } from "react";
import Banner from "../../components/Banner";
import BudsComp from "../../components/BudsComp";
import { Link } from 'react-router';
import Footer from "../../components/Footer";


class Buds extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <BudsComp />
        {/* <Footer /> */}
      </React.Fragment>
    )
  }

};

export default Buds;