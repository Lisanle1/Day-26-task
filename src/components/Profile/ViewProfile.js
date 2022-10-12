import React, { useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import Navbar from '../NavBar'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from '../SideBar';
import { Button } from "@mui/material";
function ViewProfile() {
  let navigate=useNavigate();
  let [userData,setUserData]=useState([])
    useEffect(()=>{
        async function getData(){
            let res=await axios.get('https://628deacca339dfef87a35012.mockapi.io/profile');
            setUserData(res.data)
        }
        getData();
        
    },[])
    let handleDelete=async(id)=>{
      let res=await axios.delete(`https://628deacca339dfef87a35012.mockapi.io/profile/${id}`);
      const user=userData.filter((e)=>e.id !==res.data.id)
      setUserData(user)
    }
  return (
    <>
     <Sidebar />
     <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
          <h3>Profile List</h3>
<TableContainer component={Paper}>
  <Table sx={{ width: "100%" }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell align="left">Name</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Gender</TableCell>
        <TableCell align="left">DOB</TableCell>
        <TableCell align="left">Mobile</TableCell>
        <TableCell align="left">City</TableCell>
        <TableCell align="left">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      
      {userData.map((e) => (  
      <TableRow key={e.id}>  
          <TableCell component="th" scope="row">
            {e.id} 
          </TableCell>
          <TableCell align="left">{e.name}</TableCell>
          <TableCell align="left">{e.email}</TableCell>
          <TableCell align="left">{e.gender}</TableCell>
          <TableCell align="left">{e.dateofbirth}</TableCell>
          <TableCell align="left">{e.mobile}</TableCell>
          <TableCell align="left">{e.city}</TableCell>
          <TableCell align="left">
            <Button variant='contained' onClick={()=>navigate(`/edit-profile/${e.id}`)}>
              Edit
            </Button>
           &nbsp;&nbsp;
            <Button  style={{backgroundColor:'red'}}variant='contained' onClick={()=>handleDelete(e.id)}>
            Delete
            </Button>
 </TableCell>
        
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
</div>
{/* <!-- Footer --> */}
<footer className="sticky-footer bg-white" >
          <div className="container my-auto" >
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div> 
        </footer>   
     
        {/* <!-- End of Footer --> */}
 </div>
    </>
  )
}

export default ViewProfile;