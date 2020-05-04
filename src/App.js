import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from './components/layout/Form'


import Page2 from "./components/layout/Form";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar/> */}
 
      </header>
      
      <BrowserRouter>
           <Switch>
            <Route exact path="/" component={Navbar} />
            <Route path="/Form" component={Form} />
          </Switch>
          </BrowserRouter>,

    </div>
     
  );
}

export default App;
