import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Components/Home";

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default App;
