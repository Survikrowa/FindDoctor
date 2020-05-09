import React from "react";
import { Service } from "./Service";

import { servicesArray } from "./servicesArray";

export class Services extends React.Component {
  renderService = () => {
    return servicesArray.map(service => (
      <Service item={service} key={service.id} />
    ));
  };

  render() {
    return (
      <section className="flex box-border flex-col md:flex-row">
        {this.renderService()}
      </section>
    );
  }
}
