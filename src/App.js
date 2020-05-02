import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./PageRoutes";
import Users from './Components/users';

function App() {
  return (
    <div className="App">
      <Router>
      <PageRoutes />
      <Users />
      </Router>
    </div>
  );
}

export default App;
