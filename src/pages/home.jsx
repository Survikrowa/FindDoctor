import React from "react";
import Header from "../components/header/header";
import Banner from "../components/main-banner/banner";
import Services from "../components/services/services";
import { FindDoctor } from "../components/find-doctor/FindDoctor/FindDoctor";

export class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FindDoctor />
        <Services />
        <Banner />
      </>
    );
  }
}
