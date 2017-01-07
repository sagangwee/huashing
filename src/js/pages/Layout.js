import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      // marginTop: "60px"
    };
    return (
      <div>
        <Header/>
        <Nav location={location} />

        <div class="container" style={containerStyle}>
          {this.props.children}
        </div>
        <Footer/>
      </div>

    );
  }
}
