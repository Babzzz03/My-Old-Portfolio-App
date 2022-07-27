import React, { Component, useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from "./pages";

import Contact from "./pages/Contact";
import Preloader from './components/Preloader';





function App () {
  
  const [isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    setTimeout(()=> {
setIsLoading(false)
    }, 2400);
  })
    return (
      <Router>
       {isLoading ? <Preloader/> : <Switch>
   
          <Route path="/" exact component={Home} />
          <Route path="/contacts" component={Contact} />
        </Switch>}
      </Router>
    );
  
}

export default App;
