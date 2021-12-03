import React from "react";
import "./AddUser.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        alert("Please enter valid data");
        return;
    }else if(enteredUserName.trim().length < 3 ) {
        alert("Your name should be atleast 3 characters long and contain only letters");
        return;
    }
    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
