import ContactForm from "./ContactForm/ContactForm";

import "./App.css";

import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedValue = window.localStorage.getItem("saved-value");

    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }
    return [];
  });
  const [inputValue, setInputValue] = useState("");
  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const addContact = (newValue) => {
    setContacts((contactsState) => [...contactsState, newValue]);
  };
  const deleteContact = (id) => {
    setContacts((contactsState) =>
      contactsState.filter((contact) => contact.id !== id)
    );
  };
  useEffect(() => {
    window.localStorage.setItem("saved-value", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setInputValue={setInputValue} inputValue={inputValue} />
      <ContactList contacts={filterContact} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
