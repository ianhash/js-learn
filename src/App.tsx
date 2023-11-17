import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseEffectInfinitUpdate from "./pages/UseEffectInfinitUpdate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="use-effect-infinit-update"
            element={<UseEffectInfinitUpdate />}
          />
        </Routes>
      </section>
      <footer className="App-footer">
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
