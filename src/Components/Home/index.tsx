import * as React from 'react';
import Nav from "../Nav";
import Githubinfo from "../Githubinfo";

const Home = () => {
  let name: string;
  name = "lee";
  return(
    <div>
      <div>
        <Nav name="good"/>
        <Githubinfo/>
        <p>
          Hello {name}
          <br/>

          dev test
          dev test
        </p>
      </div>
    </div>
  )
}

export default Home;