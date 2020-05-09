import React from "react";
import { Contacts } from "./Contacts";
import { Logo } from "./Logo";

export class Header extends React.Component {
  render() {
    return (
      <header className="container flex flex-col md:flex-row md:justify-between md:mx-auto md:p-6">
        <Logo />
        <Contacts />
      </header>
    );
  }
}
