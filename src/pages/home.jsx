import React from "react";
import { Header } from "../components/header/Header";
import { Banner } from "../components/main-banner/Banner";
import { Services } from "../components/services/Services";
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
