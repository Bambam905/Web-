/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (

      <div>

        <nav className="navbar navbar-expanded navbar-dark bg-dark">
          <a href="/tasks" className="navbar-brand">
            Task 2 Bam
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/task"} className="nav-link">
              Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
              New Task
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<task-list/>} />
            <Route path="/tasks" element={<task-list/>}></Route>
            <Route path="/add" element={<add-task/>}></Route>
            <Route path="/tasks/:id" element={<task/>}></Route>
          </Routes>
        </div>
      </div>

    );
  }
}

export default App;