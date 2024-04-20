import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        <FaUser /> {contact.name}
      </p>
      <p className={css.text}>
        <FaPhone /> {contact.number}
      </p>
      <button
        className={css.btn}
        onClick={() => deleteContact(contact.id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
