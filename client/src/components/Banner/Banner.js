import React from "react";

const imageStyle = {
  transform: "translate3d(-50%, 479.732px, 0px)",
  opacity: 1,
}

const Banner = () => (

  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center blue-grey-text text-lighten-3">Start Crawling</h1>
        <div className="row center">
          <h4 className="header col s12 white-text light">Find your Buds and start Crawling toward Suds</h4>
        </div>
        <div className="row center">
          <a href="/Login" id="download-button" className="btn-large waves-effect waves-light blue lighten-1">Login</a>
        </div>
        <br /><br />

      </div>
    </div>
    <div className="parallax"><img src="./images/background7.jpg" alt="Unsplashed background img 7" style={imageStyle} /></div>
  </div>
)

export default Banner;