import * as React from 'react';
import { useSelector } from "react-redux";
import Nav from "../Nav";
import "./home.scss"
import Githubinfo from "../Githubinfo";

const Home = () => {
  const auth = useSelector((state : any) => state.auth);
  return(
    <div>
    <img className="bonobono" src="https://lh3.googleusercontent.com/proxy/H0D6NjBYlo8h5Frmj7EcWIOK59aQLeC4vUrIr61KW2CuL62CdTc4yrVHKHhgvTCA98Ox69FMgACeT1qgcsFMugWLOYMmnptkSCNdJDvvvhnLFKWHc5FP9o-91FimRPu9untu8m592kljaiTYbs0R0GWPww6YIXgpamvS"></img>
      <div className="foo">
        <Nav navProp="This is navigation"/>
        
        <h1>
          Hello {auth.isAuthenticated? auth.user.login : ""}
        </h1>
        
        <Githubinfo/>
      
      </div>
    </div>
  )
}

export default Home;