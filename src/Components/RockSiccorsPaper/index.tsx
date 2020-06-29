import React, { useState, useEffect } from "react";
import { setCurrentUser } from "../../actions/authAction";
import { useDispatch } from "react-redux";
import "./RockSiccorsPaper.scss";

const RockSiccorsPaper = () => {
    const [honesty, setHonesty] = useState(Math.floor(Math.random() * 101));
    const [choose, setChoose] = useState(Math.floor(Math.random() * 3));
    const [done, setDone] = useState(false);
    const [result, setResult] = useState(0);

    const handleClick = (e: any) => {
        console.log(e.target.value);
        switch (e.target.value) {
            case "s":
                if (choose === 0) setResult(1);
                if (choose === 1) setResult(2);
                if (choose === 1) setResult(0);
            case "s":
                if (choose === 0) setResult(1);
                if (choose === 1) setResult(2);
                if (choose === 1) setResult(0);
            case "s":
                if (choose === 0) setResult(1);
                if (choose === 1) setResult(2);
                if (choose === 1) setResult(0);
            default:
                setDone(!done);
        }
    };

    const rsp = ["나 이번에 가위 낼꺼야~", "이번엔 주먹 낼거야", "보자기 낼거야"];
    const msg = ["승리", "비김", "패배"];

    return (
        <div className="rsp">
            <div>
                <h1>보노보노랑 가위바위보하기</h1>
                <p>보노보노가 거짓말 했을 확률 {honesty}%</p>
                <h3>(・∞・) : {rsp[choose]}</h3>
                <p onClick={handleClick}>
                    나는 무얼 낼까 :<button value="s">가위</button>
                    <button value="r">바위</button>
                    <button value="p">보</button>
                </p>
                <p>{done ? msg[result] : ""}</p>
            </div>
            <div>{/*
                <p>(❛∞❛)</p>
                <p>(⁻∞⁻)</p>
               */}</div>
        </div>
    );
};

export default RockSiccorsPaper;
