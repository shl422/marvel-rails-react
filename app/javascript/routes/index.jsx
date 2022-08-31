
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Reset from "../components/Reset";
import Dashboard from "../components/Dashboard";

export default (
	<Router>
		<Routes>
		<Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
			<Route path="/" exact element={<Home/>} />
		</Routes>
	</Router>
);