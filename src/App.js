// import logo from './logo.svg';
import './App.css';
import Repositories from "./component/Repositories";
import Cover from "./component/Cover";
import Dashboard from "./component/Dashboard";
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Branches from './component/Branches';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/branches" element={<Branches />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
