import React, {useState} from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import DankModal from "../UI/dankModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid name and age"
        })
        return;
    }else if(enteredUserName.trim().length < 3 ) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid name with atleast 3 characters"
        })
        return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
      setError(null);
  }
  

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
      <>
     {error && <DankModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
    </>
  );
};


export default AddUser;
