import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import AllUsers from "./Components/AllUsers";
import AllPosts from "./Components/AllPosts";
import Profile from "./Components/Profile";
import CreatePost from "./Components/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/adminprofile" element={<Profile />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/allposts" element={<AllPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
