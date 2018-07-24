import React from "react";

const Dashboard = () => (
<div className="container">
    <div className="section">

         {/* Icon Section     */}
      <div className="row">

        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons "><a href="/Buds">people</a></i></h2>
            <h5 className="center">Buds</h5>
            {/* <a id="logo-container" href="/Buds" className="brand-logo gold-text">Buds</a> */}
            {/* <p className="light ">Search a set of pre-made bar crawls submitted by previous users.</p> */}
          </div>
        </div>

        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons"><a href="/Pubs">local_bar</a></i></h2>
            <h5 className="center">Pubs</h5>
            {/* <p className="light">Search for bars and create customized bar crawls that suit your own needs and interests.</p> */}
          </div>
        </div>

        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons"><a href="/Crawls">directions_walk</a></i></h2>
            <h5 className="center">Crawls</h5>
            {/* <p className="light">Create an account and set your personal preferences.</p> */}
          </div>
        </div>

        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons"><a href="/Profile">face</a></i></h2>
            <h5 className="center">Profile</h5>
            {/* <p className="light">Picture of beer goes here.</p> */}
          </div>
        </div>

      </div>

    </div>
  </div>
)

export default Dashboard;