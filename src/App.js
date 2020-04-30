import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./PageRoutes";

function App() {
  return (
    <div className="App">
      <Router>
      <PageRoutes />
      </Router>
    </div>
  );
}

export default App;
