// import logo from './logo.svg';
import './App.css';
import Repositories from "./component/Repositories";
import Cover from "./component/Cover";
import Dashboard from "./component/Dashboard";
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        {/* <Button /> */}

        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
