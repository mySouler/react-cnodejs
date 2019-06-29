import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/common/Header/index"
import Home from "./components/views/Home/index"


function App() {
  return (
    <div className="App">
        <Router>
            <Route>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                </Switch>
            </Route>
        </Router>
    </div>
  );
}

export default App;
