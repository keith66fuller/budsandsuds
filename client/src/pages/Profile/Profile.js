import React, { Component } from "react";
import Banner from "../../components/Banner";
import ProfileComp from "../../components/ProfileComp";
import { Link } from 'react-router';
import Footer from "../../components/Footer";


class Profile extends Component {

  render() {
    return (
      <React.Fragment>
        <Banner />
        <ProfileComp />
        {/* <Footer /> */}
      </React.Fragment>
    )
  }

};


export default Profile;