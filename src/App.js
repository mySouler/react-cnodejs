import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/common/Header"
import Dialog from "./components/common/Dialog"
import Home from "./components/views/Home"
import UserInfo from "./components/views/UserInfo"
import artcleDes from "./components/views/ArtcleDes"


function App() {
  return (
    <div className="App">
        <Router>
            <Route>
                <Header/>
                <Dialog/>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route  path="/user/:id" component={UserInfo} ></Route>
                    <Route  path="/topic/:id/:author" component={artcleDes} ></Route>
                </Switch>
            </Route>
        </Router>
    </div>
  );
}

export default App;
