import React, { Component } from "react";
import Banner from "../../components/Banner";
import BudsComp from "../../components/BudsComp";
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