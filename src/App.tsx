import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import './CSS/App.css';

import Home from "./Components/Home";

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default App;