import React, { Component } from "react";
import CrawlCard from "../../components/CrawlCard";
import API from "../../utils/API";
import Infinite from "react-infinite"

class Crawls extends Component {
  constructor(props) {
    super(props);
    this.state = { crawls: [] }
  }
  componentDidMount() {
    this.loadCrawls();
  }

  loadCrawls = () => {
    API.getcrawls()
      .then(res => {
        this.setState({
          crawls: res.data
        });
      })
      .catch(err => console.log(err));
    };

  render() {
    const { crawls } = this.state

    return crawls.length ?
      <Infinite containerHeight={1080} elementHeight={40}>
        {crawls.map(crawl => <CrawlCard key={crawl._id} crawl={crawl}/> )}
      </Infinite>
    : null
  }
};

export default Crawls;