import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("response", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log("error", error));
  };
};

const userDeleted = () => ({
  type: types.DELETE_USER,
});

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("response", resp);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("error", error));
  };
};

const userAdded = () => ({
  type : types.ADD_USER,
})

export const addUser = (user) => {
return function (dispatch){
  axios.post(`${process.env.REACT_APP_API}`,user)
.then((resp)=>{
  console.log("response", resp);
  dispatch(userAdded());
})
.catch((error)=>console.log(error));
}
}

 const getUser = (user)=>({
  type : types.GET_SINGLE_USER,
  payload : user,
})

export const getSingleUser = (id) => {
  return function (dispatch){
    axios.get(`${process.env.REACT_APP_API}/${id}`)
  .then((resp)=>{
    console.log("response", resp);
    dispatch(getUser(resp.data));
  })
  .catch((error)=>console.log(error));
  }
  }

  const userUpdated = () => ({
  type: types.UPDATE_USER,
});

export const updateUser = (user,id) => {
  return function (dispatch){
    axios.put(`${process.env.REACT_APP_API}/${id}`,user)
  .then((resp)=>{
    console.log("response", resp);
    dispatch(userUpdated());
  })
  .catch((error)=>console.log(error));
  }
  }

// _ p o " { } : P
