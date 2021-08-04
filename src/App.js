import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import User from './components/Users';



let App = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/todo'} component={Todo}/>
                        <Route exact path={'/users'} component={User}/>
                    </Switch>
            </Router>
        </React.Fragment>
    )
};
export default App;
