import * as React from "react";
import { useSelector } from "react-redux";
import "./home.scss";

import Nav from "../Nav";
import Githubinfo from "../Githubinfo";
import Counter from "../Counter";
import RockSiccorsPaper from "../RockSiccorsPaper";

const Home = () => {
    const auth = useSelector((state: any) => state.auth);
    return (
        <div>
            <img className="bonobono" src={process.env.PUBLIC_URL + "/bonobono.jpg"}></img>
            <div className="foo">
                <Nav navProp="This is navigation" />
                <h1>Hello {auth.isAuthenticated ? auth.user.login : ""}</h1>
                <Githubinfo />
                <Counter />
                <RockSiccorsPaper />
            </div>
        </div>
    );
};

export default Home;
