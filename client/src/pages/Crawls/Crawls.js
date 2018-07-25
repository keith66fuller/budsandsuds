import React, { Component } from "react";
import Banner from "../../components/Banner";
import CrawlsComp from "../../components/CrawlsComp";
import { Link } from 'react-router';
import Footer from "../../components/Footer";


class Crawls extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <CrawlsComp /> 
        {/* <Footer /> */}
      </React.Fragment>
    )
  }

};

export default Crawls;