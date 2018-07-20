import React, { Component } from "react";
import Banner from "../../components/Banner";
import CrawlsComp from "../../components/CrawlsComp";
import { Link } from 'react-router';


class Crawls extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <CrawlsComp /> 
      </React.Fragment>
    )
  }

};

export default Crawls;