import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getSingleUser, updateUser } from "../redux/actions";

const EditUser = () => {
  const { id } = useParams();

  const { user } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;

  const [error, setError] = useState("");
  const GoToHomePage = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button is clicked");
    if (!name || !address || !contact || !email) {
      setError("Please enter all inputs.");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    setState({ ...user });
  }, [user]);
  return (
    <>
      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={GoToHomePage}
      >
        Go Back
      </Button>
      <h2>Edit User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          value={name || ""}
          name="name"
          type="text"
          onChange={handleInputChange}
          style={{ marginBottom: "20px", width: "45ch" }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email || ""}
          name="email"
          type="email"
          onChange={handleInputChange}
          style={{ marginBottom: "20px", width: "45ch" }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact || ""}
          name="contact"
          type="number"
          onChange={handleInputChange}
          style={{ marginBottom: "20px", width: "45ch" }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address || ""}
          name="address"
          type="text"
          onChange={handleInputChange}
          style={{ marginBottom: "20px", width: "45ch" }}
        />
        <br />
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Update
        </Button>
      </form>
    </>
  );
};

export default EditUser;

//  ||
