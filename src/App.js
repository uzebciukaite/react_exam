import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AllUsersPage from './pages/AllUsersPage';
import Toolbar from "./components/Toolbar"
import ConversationPage from './pages/ConversationPage';
import SingleUserPage from './pages/SingleUserPage';



function App() {


  return (



<div className="App"> 
<BrowserRouter>
<Toolbar/>
<Routes>
  
 <Route path="/" element={<HomePage />}/>
 <Route path="/login" element={<LoginPage />}/>
 <Route path="/register" element={<RegisterPage />}/>
 <Route path="/userprofile" element={<ProfilePage />}/>
 <Route path="/allusers" element={<AllUsersPage />}/>
 <Route path="/user/:id" element={<SingleUserPage />}/>
 <Route path="/conversations" element={<ConversationPage />}/>



  
</Routes>

</BrowserRouter>

  


</div>






    
  );
}

export default App;
