import React from "react";
import Service from "./service";

import { servicesArray } from "./servicesArray";

class Services extends React.Component {
  state = {
    servicesArray
  };

  render() {
    const { servicesArray } = this.state;
    return (
      <section className="flex box-border flex-col md:flex-row">
        {servicesArray.map(service => (
          <Service item={service} key={service.id} />
        ))}
      </section>
    );
  }
}

export default Services;
