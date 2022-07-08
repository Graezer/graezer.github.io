import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";

ReactDOM.render(
 <HashRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/about" element={<About/>}/>
  </Routes>
 </HashRouter>,
 document.getElementById("root")
);
