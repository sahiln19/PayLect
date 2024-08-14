import React from 'react';
import ReactDOM from 'react-dom/client';
import { withCookies } from 'react-cookie';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminProfile from './AdminProfile';
import AdminEditProfile from './AdminEditProfile';
import AdminForgotPassword from './AdminForgotPassword';
import Menu from './Menu.js';
import Dashboard from './Dashboard';
import Courses from './Courses';
import AddCourses from './AddCourses';
import EditCourses from './EditCourses';

import Teachers from './Teachers';
import AddTeachers from './AddTeachers';
import EditTeachers from './EditTeachers';

import Subjects from './Subjects';
import AddSubjects from './AddSubjects';
import EditSubjects from './EditSubjects';

import Batches from './Batches';
import AddBatches from './AddBatches';
import EditBatches from './EditBatches';

import Lectures from './Lectures';
import AddLectures from './AddLectures';

import Payout from './Payout';
import AddPayout from './AddPayout';
import Reports from './Reports';
import Logout from './Logout';
import NoPageFound from './NoPageFound';

function MyRoutes (){
    console.log('MyRoutes');


 return(<BrowserRouter>
 <Routes>
      <Route index path='/' element={<AdminLogin/>}/>
      <Route path='/AdminProfile' element={<AdminProfile/>}/>
      <Route path='/AdminEditProfile' element={<AdminEditProfile/>}/>
      <Route path='/AdminForgotPassword' element={<AdminForgotPassword/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/AddCourses' element={<AddCourses/>}/>
      <Route path='/EditCourses/:id' element={<EditCourses/>}/>
      
      <Route path='/Subjects' element={<Subjects/>}/>
      <Route path='/AddSubjects' element={<AddSubjects/>}/>
      <Route path='/EditSubjects/:id' element={<EditSubjects/>}/>
    
      <Route path='/Teachers' element={<Teachers/>}/>
      <Route path='/AddTeachers' element={<AddTeachers/>}/>
      <Route path='/EditTeachers/:id' element={<EditTeachers/>}/>
      
      <Route path='/Batches' element={<Batches/>}/>
      <Route path='/AddBatches' element={<AddBatches/>}/>
      <Route path='/EditBatches/:id' element={<EditBatches/>}/>
     
      <Route path='/Lectures' element={<Lectures/>}/>
      <Route path='/AddLectures' element={<AddLectures/>}/>
      <Route path='/Reports' element={<Reports/>}/>
      
      <Route path='/Payout' element={<Payout/>}/>
      <Route path='/AddPayout' element={<AddPayout/>}/>
      
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='*' element={<NoPageFound/>}/>
 </Routes>
 </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
var MyRoutesWithCookies = withCookies(MyRoutes);
root.render(<MyRoutesWithCookies/>)