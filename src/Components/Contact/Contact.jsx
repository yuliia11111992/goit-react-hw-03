import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div>
      <p>
        <FaUser /> {contact.name}
      </p>
      <p>
        <FaPhone /> {contact.number}
      </p>
      <button onClick={() => deleteContact(contact.id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
