import React from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ setInputValue, inputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  return (
    <div>
      <input
        className={css.searchname}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
