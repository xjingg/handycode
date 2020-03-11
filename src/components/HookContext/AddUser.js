import React, { useState, useContext } from "react";
import { UsersContext } from "./context";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const { addNewUser } = useContext(UsersContext);

  const handleChange = e => {
    setUserName(e.target.value);
  };

  return (
    <>
      <hr />
      <h3>Add new user:</h3>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <button
        className={"add-btn"}
        onClick={() => addNewUser(userName)}
        disabled={!userName}
      >
        Add
      </button>
    </>
  );
};

export default AddUser;
