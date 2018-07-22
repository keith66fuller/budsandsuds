import React, { Component } from "react";

const NewCrawl = () => (

  <div class="container">
    <div class="row valign-wrapper">
      <div class="col s6 offset-s3 valign">
        <div className="card teal darken-1">
          <div className="card-content blue-text">
            <span className="card-title center-align">Create a Crawl</span>
            <div className="card-action">
              <div className="row">
                <div className="input-field col s12">
                  <input id="crawl_name" type="text" className="validate" />
                  <label className="active" for="crawl_name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="crawl_date" type="text" className="datepicker" />
                  <label className="active" for="crawl_date">Date</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="crawl_time" type="text" className="timepicker" />
                  <label className="active" for="crawl_time">Time</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select multiple>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <label>Buds</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select multiple>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <label>Pubs</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default NewCrawl;