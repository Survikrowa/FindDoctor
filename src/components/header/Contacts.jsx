import React from "react";
import { contacts } from "./contactsArr";
import { Contact } from "./Contact";

export class Contacts extends React.Component {
  renderContacts = () => {
    return contacts.map(info => (
      <Contact
        key={info.id}
        content={info.text}
        boldContent={info.boldText}
        iconClass={info.iconClassName}
      />
    ));
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row">{this.renderContacts()}</div>
    );
  }
}
