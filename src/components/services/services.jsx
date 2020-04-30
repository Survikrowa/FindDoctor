import React from "react";
import Service from "./service";

import { servicesArray } from "./servicesArray";

class Services extends React.Component {
  state = {
    servicesArray
  };

  render() {
    const { servicesArray } = this.state;
    console.log(servicesArray);
    return (
      <section className="flex box-border">
        {servicesArray.map(service => (
          <Service item={service} />
        ))}
      </section>
    );
  }
}

export default Services;
