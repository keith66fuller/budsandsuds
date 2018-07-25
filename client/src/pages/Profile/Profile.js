import React, { Component } from "react";
import Banner from "../../components/Banner";
import ProfileComp from "../../components/ProfileComp";
import { Link } from 'react-router';


class Profile extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <ProfileComp />
      </React.Fragment>
    )
  }

};


export default Profile;