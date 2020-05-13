import React from "react";
import PropTypes from "prop-types";
import styles from "./services.module.css";
import WhiteEllipse from "../../assets/WhiteEllipse.png";

export class Service extends React.Component {
  render() {
    return (
      <div className={styles.background + " p-8"}>
        <div className="flex justify-center items-center">
          <img src={WhiteEllipse} alt="whiteEllipse" />
          <img
            className="absolute"
            src={this.props.item.iconUrl}
            alt="serviceIcon"
          />
        </div>
        <div className="box-border flex flex-col text-center p-4">
          <span className="font-bold text-white">
            {this.props.item.boldText}
          </span>
          <span className="text-white">{this.props.item.text}</span>
        </div>
      </div>
    );
  }
}

Service.propTypes = {
  iconUrl: PropTypes.string,
  boldText: PropTypes.string,
  text: PropTypes.string
};
