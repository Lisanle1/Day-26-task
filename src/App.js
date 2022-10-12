import './App.css';
import React from 'react';
import "./css/sb-admin-2.min.css";
import "./css/sb-admin-2.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './components/SideBar';
import CreateStudents from './components/Users/CreateStudents';
import EditStudents from './components/Users/EditStudents';
import StudentsList from './components/Users/StudentsList';
import Profile from './components/Profile/ViewProfile';
import RegisterProfile from './components/Profile/RegisterProfile';
import EditProfile from './components/Profile/EditProfile';
function App() {
  return (
    <div id="wrapper">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/create-students' element={<CreateStudents/>}/>
      <Route path='edit-students/:id' element={<EditStudents/>}/>
      <Route path='/students-list' element={<StudentsList/>}/>
      <Route path='/view-profile' element={<Profile/>}/>
      <Route path='/register-profile' element={<RegisterProfile/>}/>
      <Route path='edit-profile/:id' element={<EditProfile/>}/>
     </Routes>
     </BrowserRouter>     
    </div>
  );
}

export default App;
