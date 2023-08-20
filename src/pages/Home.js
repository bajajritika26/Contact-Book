import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { ButtonGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/logo.png";

// const useButtonStyles = makeStyles((theme)=>({
//   root:{
//     display:'flex',
//     flexDirection:'column',
//     alignItems:'center',
//     '& > *':{
//       margin: theme.spacing(1),
//     },
//   },
//   }))

// const useStyles = makeStyles((theme)=>({
// root:{
//   display:'flex',
//   flexDirection:'column',
//   alignItems:'center',
//   '& > *':{
//     margin: theme.spacing(1),
//   },
// },
// }))
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Home = () => {
  // const classes = useStyles();
  // const buttonstyles = useButtonStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete the user ?")) {
      dispatch(deleteUser(id));
      dispatch(loadUsers());
    }
  };
  const GoToEditPage = (id) => {
    navigate(`/editUser/${id}`);
  };
  const navigateToAddUsers = () => {
    navigate("/addUser");
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <div>
            <img src={Logo} />
            CONTACT BOOK
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={navigateToAddUsers}
          >
            Add User
          </Button>
        </nav>
      </div>
      <h1>USERS</h1>
      <TableContainer>
        <Table
          style={{ minWidth: "500px", marginTop: "20px" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="text button group"
                    >
                      <Button
                        style={{ marginRight: "10px" }}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button onClick={() => GoToEditPage(user.id)}>
                        Edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
