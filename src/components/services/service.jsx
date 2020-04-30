import React from "react";
import styles from "./services.module.css";
import WhiteEllipse from "../../assets/WhiteEllipse.png";

class Service extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className={styles.background + " p-8"} key={item.id}>
        <div className="flex justify-center items-center">
          <img src={WhiteEllipse} alt="whiteEllipse" />
          <img className="absolute" src={item.iconUrl} alt="serviceIcon" />
        </div>
        <div className="box-border flex flex-col text-center p-4">
          <span className="font-bold text-white">{item.boldText}</span>
          <span className="text-white">{item.text}</span>
        </div>
      </div>
    );
  }
}

export default Service;
