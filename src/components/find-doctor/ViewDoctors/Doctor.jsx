import React from "react";
import faker from "faker";
import { Button } from "../../button/Button";
import PropTypes from "prop-types";

export class Doctor extends React.Component {
  onButtonClick(props) {
    this.props.onMessageBtnClick(props);
  }

  render() {
    return (
      <div className="cursor-pointer border-solid border-2 p-4 flex justify-between flex-col md:flex-row items-center">
        <div className="flex items-center">
          <img
            className="rounded-full"
            src={faker.image.avatar()}
            alt="avatar"
          />
          <div className="flex flex-col ml-4 justify-start ">
            <div>
              <span className="text-3xl">{this.props.doctor.name}</span>
              <span className="text-3xl font-bold">
                {this.props.doctor.subname}
              </span>
            </div>
            <span>{this.props.doctor.specialties}</span>
          </div>
        </div>
        <Button
          onClick={() => this.onButtonClick(this.props.doctor)}
          btnStyle="bg-blue-700 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Message me
        </Button>
      </div>
    );
  }
}

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    subname: PropTypes.string,
    specialties: PropTypes.string
  })
};
