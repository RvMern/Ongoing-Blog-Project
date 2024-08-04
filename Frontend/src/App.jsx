import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import PublicNavbar from './components/PublicNavbar'
import Header from './components/Header'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import AllPosts from './components/AllPosts'
import SinglePost from './components/SinglePost'
import UserProfile from './components/UserProfile'
import UpdateProfile from './components/UpdateProfile'
import UpdatePassword from './components/UpdatePassword'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <PublicNavbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} ErrorBoundary=''/>
            <Route path='/signup' element={<SignUp/>} ErrorBoundary=''/>
            <Route path='/login' element={<LogIn/>} ErrorBoundary=''/>
            <Route path='/about-us' element={<AboutUs/>} ErrorBoundary=''/>
            <Route path='/contact-us' element={<ContactUs/>} ErrorBoundary=''/>
            <Route path='/all-posts' element={<AllPosts/>} ErrorBoundary=''/>
            <Route path='/singlepost/:id' element={<SinglePost/>} ErrorBoundary=''/>
            <Route path='/user-profile' element={<UserProfile/>} ErrorBoundary=''/>
            <Route path='/update-profile/:id' element={<UpdateProfile />} ErrorBoundary=''c/>
            <Route path='/update-password/:id' element={<UpdatePassword />} ErrorBoundary='' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
