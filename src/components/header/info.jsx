import React from "react";

export class Info extends React.Component {
  render() {
    return (
      <div className="flex justify-between md:justify-start mx-5 mb-4 items-center">
        <img
          className="relative"
          src="img/Ellipse 1.png"
          alt="blue ellipse"
        ></img>
        <i className={this.props.iconClass}></i>
        <div className="flex flex-col md:ml-4">
          <span className="font-bold">{this.props.boldContent}</span>
          <span>{this.props.content}</span>
        </div>
      </div>
    );
  }
}
