import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const pathname = location.pathname;
    const containerStyle = {
      // marginTop: "60px"
    };
    console.log(pathname);
    return (
      <div>
        <Header/>
        <Nav location={location} />

        <div class={pathname == "/" ? "" : "container"} style={containerStyle}>
          {this.props.children}
        </div>
        <Footer/>
      </div>

    );
  }
}
