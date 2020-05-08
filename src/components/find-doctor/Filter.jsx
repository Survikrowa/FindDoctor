import React from "react";

import { Option } from "./Option";

export class Filter extends React.Component {
  state = {
    selectedSpecialization: ""
  };
  createSet = () => {
    return [...new Set(this.props.doctors.map(doctor => doctor.specialties))];
  };

  onChangeHandler = e => {
    this.props.updateMethod(
      this.props.doctors.filter(doctor => doctor.specialties === e.target.value)
    );
    this.setState({ selectedSpecialization: e.target.value });
  };

  render() {
    return (
      <label htmlFor="specialization-select">
        Choose a specialization:
        <select
          name="specializations"
          id="specialization-select"
          onChange={this.onChangeHandler}
          value={this.state.selectedSpecialization}
        >
          <option value="">--Please choose an option--</option>
          {this.createSet().map(speciality => (
            <Option content={speciality} />
          ))}
        </select>
      </label>
    );
  }
}
