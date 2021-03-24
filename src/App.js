import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Footer from './Footer';
import Users from './Users';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>
    <Footer/>
    <Users/>
    </>
  );
}

export default App;
