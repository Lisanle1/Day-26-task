import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from "../NavBar";
import Sidebar from "../SideBar";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
function RegisterProfile() {
  let navigate=useNavigate();
  let formValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    dateofbirth: "",
    mobile: "",
    city: "",
    error: {
      name: "",
      email: "",
      password: "",
      gender: "",
      dateofbirth: "",
      mobile: "",
      city: "",
    },
  };
  let [formData, setFormData] = useState(formValues);
 
  let handleSubmit=async(e)=>{
    e.preventDefault();
    const errKeys=Object.keys(formData).filter((key)=>{
      let keys;
      if(formData[key]==="" && key !=='error' ) {
        keys=key;
      }
      return keys;
    });
    if(errKeys.length >=1){
      alert('Please fill all the fields')
    }
    else{
    let res=await axios.post('https://628deacca339dfef87a35012.mockapi.io/profile',formData);
    if(res.status===201)
   navigate('/view-profile')
    }
  }
  let handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is required`;
    } else {
      error[e.target.name] = "";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value, error });
  
  };

  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "45ch" },
              }}
              autoComplete="off"
              onSubmit={(e) => handleSubmit(e)}
            >
              <h3>Register user</h3>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <span style={{ color: "red" }}>{formData.error.name}</span>
              <br />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <span style={{ color: "red" }}>{formData.error.email}</span>
              <br />
              <TextField
                id="password"
                type='password'
                label="Password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <span style={{ color: "red" }}>{formData.error.password}</span>
              <br />
              <FormControl fullWidth>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
              <br />
              <span style={{ color: "red" }}>{formData.error.gender}</span>
              <br />
              <TextField
                id="dateofbirth"
                label="Date-Of-Birth"
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => handleChange(e)} 
              />
              <br />
              <span style={{ color: "red" }}>{formData.error.dateofbirth}</span>
              <br />
              <TextField
                id="mobile"
                label="Mobile"
                variant="outlined"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <span style={{ color: "red" }}>{formData.error.mobile}</span>
              <br />
              <TextField
                id="city"
                label="City"
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <span style={{ color: "red" }}>{formData.error.city}</span>
              <br />
              <Button style={{marginLeft:38}} variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>

        {/* <!-- End of Footer --> */}
      </div>
    </>
  );
}

export default RegisterProfile;
