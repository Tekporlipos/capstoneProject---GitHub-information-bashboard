// import logo from './logo.svg';
import './App.css';
import Repositories from "./component/Repositories";
import Repositories1 from "./component/Repositories1";
import Cover from "./component/Cover";
import Dashboard from "./component/Dashboard";
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Branches from './component/Branches';
import Dashboard1 from './component/Dashboard1';
import Profile from './component/Profile';
// import { useSession, signIn, signOut } from "next-auth/react";


function App() {
  // const { data: session} = useSession()  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard1" element={<Dashboard1 />} /> */}
          <Route path="/repositories" element={<Repositories />} />
          {/* <Route path="/repositories1" element={<Repositories1 />} /> */}
          <Route path="/branches/:rep" element={<Branches />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
