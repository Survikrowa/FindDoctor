import React from "react";
import styles from "./findDoctor.module.css";
import { ViewDoctors } from "./viewDoctors";
import { Message } from "./message";

export class FindDoctor extends React.Component {
  state = {
    doctorData: undefined
  };

  handleMessageBtnClick = nameAndSubname => {
    this.setState({ doctorData: nameAndSubname.doctor });
  };
  render() {
    return (
      <div>
        <h2 className="text-center font-bold text-6xl ">Doctors list</h2>
        <div className="flex flex-col md:flex-row">
          <div
            className={
              styles.container + " flex flex-col md:flex-row max-w-4xl"
            }
          >
            <ViewDoctors onMessageBtnClick={this.handleMessageBtnClick} />
          </div>
          <Message currentDoctor={this.state.doctorData} />
        </div>
      </div>
    );
  }
}
