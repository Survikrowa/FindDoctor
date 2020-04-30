import React from "react";
import { infoArray } from "./infoArray";

class Info extends React.Component {
  getInfo(array) {
    return array.map(info => (
      <div
        className="flex justify-between md:justify-start mx-5 mb-4 items-center"
        key={info.id}
      >
        <img
          className="relative"
          src="img/Ellipse 1.png"
          alt="blue ellipse"
        ></img>
        <i className={info.iconClassName}></i>
        <div className="flex flex-col md:ml-4">
          <span className="font-bold">{info.boldText}</span>
          <span>{info.text}</span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="flex flex-col md:flex-row">{this.getInfo(infoArray)}</div>
    );
  }
}

export default Info;
