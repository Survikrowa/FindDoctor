import React from "react";
import { contacts } from "./contactsArr";
import { Contact } from "./Contact";

export class Contacts extends React.Component {
  renderContacts = () => {
    return contacts.map(contact => (
      <Contact
        key={contact.id}
        content={contact.text}
        boldContent={contact.boldText}
        iconClass={contact.iconClassName}
      />
    ));
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row">{this.renderContacts()}</div>
    );
  }
}
