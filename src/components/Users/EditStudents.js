import React,{useState,useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import Navbar from '../NavBar'
import Sidebar from '../SideBar'
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function EditStudents() {
  let navigate=useNavigate();
  let params = useParams();
  let formValues={
    name:'',
    education:'',
    skills:'',
    experience:'',
    yop:'',
    courses:'',
    batch:'',
    payment:'',
    status:'',
    error: {
      name:'',
    education:'',
    skills:'',
    experience:'',
    yop:'',
    courses:'',
    batch:'',
    payment:'',
    status:'',
    },
  };
  
  let [formData,setFormData]=useState(formValues)
  console.log(formData)
  useEffect(()=>{
    async function getData(){
      let res=await axios.get(`https://628deacca339dfef87a35012.mockapi.io/student/${params.id}`);
      setFormData(res.data)
    }getData();
  },[params.id]);

  let handleSubmit=async(e)=>{
    e.preventDefault();
    let errKeys=Object.keys(formData).filter((key)=>{
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
    let res=await axios.put(`https://628deacca339dfef87a35012.mockapi.io/student/${params.id}`,formData);
    if(res.status===200)
   navigate('/students-list')
    }
  }
  const handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
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
              onSubmit={(e)=>handleSubmit(e)}
            >
              <h3>Create user</h3>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.name}</span>
              <br />
              <TextField
                id="education"
                label="Education"
                variant="outlined"
                name="education"
                value={formData.education}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.education}</span>
              <br />
              <TextField
                id="skills"
                label="Skills"
                variant="outlined"
                name="skills"
                value={formData.skills}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.skills}</span>
              <br />
              <TextField
                id="experience"
                label="Experience"
                variant="outlined"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.experience}</span>
              <br />
              <TextField
                id="yop"
                label="Year of Passed-out"
                variant="outlined"
                name="yop"
                value={formData.yop}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.yop}</span>
              <br />
              <FormControl fullWidth>
                <InputLabel id="courses">Courses</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Courses"
                  name="courses"
                  value={formData.courses}
                  onChange={(e)=>handleChange(e)}

                >
                  <MenuItem value="React">React</MenuItem>
                  <MenuItem value="JavaScript">JavaScript</MenuItem>
                  <MenuItem value="Node JS">Node JS</MenuItem>
                </Select>
              </FormControl>
              <br />
              <span style={{color:'red'}}>{formData.error.courses}</span>
              <br />
              <TextField
                id="batch"
                label="Batch"
                variant="outlined"
                name="batch"
                value={formData.batch}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.batch}</span>
              <br />
              <TextField
                id="payment"
                label="Payment"
                variant="outlined"
                name="payment"
                value={formData.payment}
                onChange={(e)=>handleChange(e)}

              />
              <br />
              <span style={{color:'red'}}>{formData.error.payment}</span>
              <br />
              <FormControl fullWidth>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={(e)=>handleChange(e)}
                >
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
              <br />
              <span style={{color:'red'}}>{formData.error.status}</span>
              <br />

              <Button style={{marginLeft:38}} variant="contained" type="submit" >
                Submit
              </Button>
            </Box>
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
        </div>
    </>
  );
};


export default EditStudents;