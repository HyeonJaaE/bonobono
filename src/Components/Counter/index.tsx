import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseBy } from "../../actions/counterAction";
import { RootState } from "../../reducers";

const Counter = () => {
    const cnt = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{ padding: "15px" }}>
                Counter
                <br />
                <input type="button" value="+1" onClick={() => dispatch(increase())}></input>
                <input type="button" value="-1" onClick={() => dispatch(decrease())}></input>
                <input type="button" value="+5" onClick={() => dispatch(increaseBy(5))}></input>
                <hr />
                Number : {cnt ? cnt.count : "bad"}
            </div>
        </div>
    );
};

export default Counter;
