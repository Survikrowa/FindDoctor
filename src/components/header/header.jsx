import React from "react";
import Info from "./info";
import Logo from "./logo";

class header extends React.Component {
  render() {
    return (
      <header className="container flex flex-col md:flex-row md:justify-between md:mx-auto md:p-6">
        <Logo />
        <Info />
      </header>
    );
  }
}
export default header;
