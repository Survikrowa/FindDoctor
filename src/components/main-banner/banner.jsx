import React from "react";
import styles from "./Banner.module.css";
import banner from "../../assets/MainBanner.jpg";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <img className={styles.background} src={banner} alt="banner"></img>
      </div>
    );
  }
}

export default Banner;
