import React, { useState } from "react";
import getGithubInfo from "../../api/getGithubInfo";
import { setCurrentUser } from "../../actions/authAction"
import { useDispatch } from "react-redux";

const Githubinfo = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    return (
        <div>
            <input type="text" placeholder="github id" onChange={(e) => setName(e.target.value)}></input>
            <button
                onClick={async () => {
                    let foo = await getGithubInfo(name);
                    let bar = JSON.stringify(foo).split(',');
                    let txt = "";
                    bar.forEach( b => { txt += b + '<br/>'})
                    document.getElementsByClassName("log")[0].innerHTML = txt;
                    dispatch(setCurrentUser(foo));
                }}
            >
                GET GITHUB INFO
            </button>
            <div>
                <h4>
                    INFO : 
                </h4>
                <p className="log"></p>
            </div>
        </div>
    );
};

export default Githubinfo;
