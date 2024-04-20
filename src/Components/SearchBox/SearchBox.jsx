import React from "react";

const SearchBox = ({ setInputValue, inputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
