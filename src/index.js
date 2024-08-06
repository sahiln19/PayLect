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
import DeleteCourses from './DeleteCourses';
import Faculties from './Faculties';
import  AddFaculties from './AddFaculties';
import EditFaculties from './EditFaculties';
import DeleteFaculties from './DeleteBatches';
import Subjects from './Subjects';
import AddSubjects from './AddSubjects';
import EditSubjects from './EditSubjects';
import DeleteSubjects from './DeleteSubjects.js';
import Batches from './Batches';
import AddBatches from './AddBatches';
import EditBatches from './EditBatches';
import DeleteBatches from './DeleteBatches';
import Lectures from './Lectures';
import AddLectures from './AddLectures';
import EditLectures from './EditLectures';
import DeleteLectures from './DeleteLectures';
import Payout from './Payout';
import AddPayout from './AddPayout';
import DeletePayout from './DeletePayout';
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
      <Route path='/EditCourses' element={<EditCourses/>}/>
      <Route path='/DeleteCourses' element={<DeleteCourses/>}/>
      <Route path='/Subjects' element={<Subjects/>}/>
      <Route path='/AddSubjects' element={<AddSubjects/>}/>
      <Route path='/EditSubjects' element={<EditSubjects/>}/>
      <Route path='/DeleteSubjects' element={<DeleteSubjects/>}/>
      <Route path='/Faculties' element={<Faculties/>}/>
      <Route path='/AddFaculties' element={<AddFaculties/>}/>
      <Route path='/EditFaculties' element={<EditFaculties/>}/>
      <Route path='/DeleteFaculties' element={<DeleteFaculties/>}/>
      <Route path='/Batches' element={<Batches/>}/>
      <Route path='/AddBatches' element={<AddBatches/>}/>
      <Route path='/EditBatches' element={<EditBatches/>}/>
      <Route path='/DeleteBatches' element={<DeleteBatches/>}/>
      <Route path='/Lectures' element={<Lectures/>}/>
      <Route path='/AddLectures' element={<AddLectures/>}/>
      <Route path='/EditLectures' element={<EditLectures/>}/>
      <Route path='/DeleteLectures' element={<DeleteLectures/>}/>
      <Route path='/Payout' element={<Payout/>}/>
      <Route path='/AddPayout' element={<AddPayout/>}/>
      <Route path='/DeletePayout' element={<DeletePayout/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='*' element={<NoPageFound/>}/>
 </Routes>
 </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
var MyRoutesWithCookies = withCookies(MyRoutes);
root.render(<MyRoutesWithCookies/>)