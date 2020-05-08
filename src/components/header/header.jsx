import React from "react";
import { Informations } from "./Informations";
import { Logo } from "./Logo";

export class Header extends React.Component {
  render() {
    return (
      <header className="container flex flex-col md:flex-row md:justify-between md:mx-auto md:p-6">
        <Logo />
        <Informations />
      </header>
    );
  }
}
