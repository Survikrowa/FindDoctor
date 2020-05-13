import React from "react";
import PropTypes from "prop-types";
import { API } from "../../../utils/apiCall";
import { Doctor } from "./Doctor";
import { Filter } from "./Filter";

export class ViewDoctors extends React.Component {
  state = {
    doctors: []
  };

  updateState = doctorsArray => {
    this.setState({ doctors: doctorsArray });
  };
  componentDidMount() {
    API.fetchDoctors().then(response => this.setState({ doctors: response }));
  }

  renderDoctorsProfiles = () => {
    return this.state.doctors.map(item => (
      <Doctor
        doctor={item}
        key={item.id}
        onMessageBtnClick={this.props.onMessageBtnClick}
      />
    ));
  };

  render() {
    return (
      <div className="container">
        <Filter updateMethod={this.updateState} doctors={this.state.doctors} />
        {this.renderDoctorsProfiles()}
      </div>
    );
  }
}

ViewDoctors.propTypes = {
  onMessageBtnClick: PropTypes.func
};
