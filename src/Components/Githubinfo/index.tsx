import * as React from 'react';
import getGithubInfo from '../../api/getGithubInfo';
import {githubData} from "../../actions/authAction";

const Githubinfo = () => {
  let name: string;
  name = "HyeonJaae";
  return(
    <div>
      <button onClick={async () => {
          let foo = await getGithubInfo(name);
          githubData({"a" : 123});
          }}>PUSH</button>
    </div>
  )
}


export default Githubinfo;