import React, { Component } from "react";
import Banner from "../../components/Banner";
import CrawlsComp from "../../components/CrawlsComp";
import NewCrawl from "../../components/NewCrawl";
import CrawlListItem from "../../components/CrawlListItem";
import { Link } from 'react-router';
import API from "../../utils/API";


class Crawls extends Component {
  // state = {
  //   pubs: [],
  //   buds: []
  // };

  // componentDidMount() {
  //   this.loadPubs();
  // }

  // loadPubs = () => {
  //   API.getpubs()
  //     .then(res => {this.setState({ pubs: res.data })
  //     console.log("Pubs List"); 
  //     // console.log(this.state.pubs);   
  //     console.log(res.data);  
  //   })
  //     .catch(err => console.log(err));

  //   console.log("Pubs List"); 
  //   // console.log(this.state.pubs);   
  //   console.log(res.data);  
  // };

  render() {
    return (
      <React.Fragment>
        <Banner />
        {/* <CrawlsComp />  */}
        <CrawlListItem />
        <CrawlListItem />
        <NewCrawl />
      </React.Fragment>
    )
  }

};

export default Crawls;