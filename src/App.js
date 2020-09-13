import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './Components/Index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component = {Index} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
