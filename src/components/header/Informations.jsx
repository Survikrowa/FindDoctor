import React from "react";
import { infoArray } from "./infoArray";
import { Info } from "./Info";

export class Informations extends React.Component {
  render() {
    return (
      <div className="flex flex-col md:flex-row">
        {infoArray.map(info => (
          <Info
            key={info.id}
            content={info.text}
            boldContent={info.boldText}
            iconClass={info.iconClassName}
          />
        ))}
      </div>
    );
  }
}
