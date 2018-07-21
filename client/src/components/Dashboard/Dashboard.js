import React, { Component } from "react";

const Dashboard = () => (
<div class="container">
    <div class="section">

         {/* Icon Section     */}
      <div class="row">

        <div class="col s12 m6">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons "><a href="/Buds">people</a></i></h2>
            <h5 class="center">Buds</h5>
            {/* <a id="logo-container" href="/Buds" className="brand-logo gold-text">Buds</a> */}
            {/* <p class="light ">Search a set of pre-made bar crawls submitted by previous users.</p> */}
          </div>
        </div>

        <div class="col s12 m6">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons"><a href="/Pubs">local_bar</a></i></h2>
            <h5 class="center">Pubs</h5>
            {/* <p class="light">Search for bars and create customized bar crawls that suit your own needs and interests.</p> */}
          </div>
        </div>

        <div class="col s12 m6">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons"><a href="/Crawls">directions_walk</a></i></h2>
            <h5 class="center">Crawls</h5>
            {/* <p class="light">Create an account and set your personal preferences.</p> */}
          </div>
        </div>

        <div class="col s12 m6">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons"><a href="/Profile">face</a></i></h2>
            <h5 class="center">Profile</h5>
            {/* <p class="light">Picture of beer goes here.</p> */}
          </div>
        </div>

      </div>

    </div>
  </div>
)

export default Dashboard;