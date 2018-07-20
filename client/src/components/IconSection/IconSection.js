import React, { Component } from "react";

const IconSection = () => (
<div className="container">
    <div className="section">

      {/* Icon Section */}
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">edit_location</i></h2>
            <h5 className="center">Find a Crawl</h5>
            <p className="light ">Search a set of pre-made bar crawls submitted by previous users.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">directions_walk</i></h2>
            <h5 className="center">Make a Crawl</h5>

            <p className="light">Search for bars and create customized bar crawls that suit your own needs and interests.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">face</i></h2>
            <h5 className="center">Profile</h5>

            <p className="light">Create an account and set your personal preferences.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default IconSection;