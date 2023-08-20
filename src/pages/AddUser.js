import React, { useState } from "react";
import { Button, TextField ,Input} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "45ch",
//     },
//   },
// }));

const AddUser = () => {

  // const classes = useStyles();
  const navigate = useNavigate();
const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;

  const [error,setError] = useState("");
const GoToHomePage = () => {
  navigate("/")
}

const handleInputChange = (e) => {
  const {name,value} = e.target;
setState({...state,[name]:value});
}
const handleSubmit = (e) => {
e.preventDefault();
console.log("button is clicked");
if(!name  || !address  || !contact  || !email){
  setError("Please enter all inputs.")

}else{
  dispatch(addUser(state));
navigate("/");
setError("");

}
};

  
  return (
    <>
    <Button style={{marginTop:"20px"}} variant="contained" color="secondary" onClick={GoToHomePage}>
Go Back      
    </Button>
      <h2>Add User</h2>
      {error && (<p style={{color:"red"}}>{error}</p>)}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          id="standard-basic" 
          label="Name" 
          value={name} 
          name="name"
          type="text" 
          onChange={handleInputChange}
          style={{marginBottom:"20px",width: "45ch"}}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
          style={{marginBottom:"20px",width: "45ch"}}

        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          name="contact"
          type="number"
          onChange={handleInputChange}
          style={{marginBottom:"20px",width: "45ch"}}

        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          name="address"
          type="text"
          onChange={handleInputChange}
          style={{marginBottom:"20px",width: "45ch"}}

        />
        <br />
        <Button style={{marginTop:"20px"}} variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddUser;


//  ||