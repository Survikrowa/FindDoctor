import React from "react";
import PropTypes from "prop-types";

export class Contact extends React.Component {
  render() {
    return (
      <div className="flex justify-between md:justify-start mx-5 mb-4 items-center">
        <img className="relative" src="img/Ellipse 1.png" alt="blue ellipse" />
        <i className={this.props.iconClass} />
        <div className="flex flex-col md:ml-4">
          <span className="font-bold">{this.props.boldContent}</span>
          <span>{this.props.content}</span>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  iconClass: PropTypes.string,
  boldContent: PropTypes.string,
  content: PropTypes.string
};
