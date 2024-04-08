import './App.css';
import './output.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Figure1 from './components/Figure1/Figure1';

import Figure2 from './components/Figure2/Figure2';

import Figure3 from './components/Figure3/Figure3';

import Dashboard from './components/Dashboard/Dashboard'
function App() {
  return (
    <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/SyncFusion/" component = { Figure1 } />
          <Route path="/SyncFusion/Figure2" component ={Figure2} />
          <Route path="/SyncFusion/Figure3" component ={Figure3} />
          <Route path="/SyncFusion/Dashboard" component ={Dashboard}/>
        </Switch>
        <Footer />
      </React.Fragment>
  );
}

export default App;
