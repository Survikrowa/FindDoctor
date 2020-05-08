import React from "react";
import { API } from "../../utils/apiCall";
import { Doctor } from "./doctor";
import { Filter } from "./Filter";

export class ViewDoctors extends React.Component {
  state = {
    doctors: []
  };

  updateState = newArray => {
    this.setState({ doctors: newArray });
  };
  componentDidMount() {
    API.fetchDoctors().then(response => this.setState({ doctors: response }));
  }

  render() {
    return (
      <div className="container">
        <Filter updateMethod={this.updateState} doctors={this.state.doctors} />
        {this.state.doctors
          ? this.state.doctors.map(item => (
              <Doctor
                doctor={item}
                key={item.id}
                onMessageBtnClick={this.props.onMessageBtnClick}
              />
            ))
          : ""}
      </div>
    );
  }
}
