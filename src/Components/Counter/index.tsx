import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseBy } from "../../actions/counterAction";
import { RootState } from "../../reducers";

const Counter = () => {
    const cnt = useSelector((state: RootState) => state.counter);
    const [diff, setDiff] = useState(0);
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{ padding: "15px" }}>
                Counter
                <br />
                <input type="button" value="+1" onClick={() => dispatch(increase())}></input>
                <input type="button" value="-1" onClick={() => dispatch(decrease())}></input>
                <input
                    type="number"
                    onChange={(e) => {
                        setDiff(Number(e.target.value));
                    }}
                ></input>
                <input
                    type="button"
                    value={"+" + diff}
                    onClick={() => dispatch(increaseBy(diff))}
                ></input>
                <hr />
                Number : {cnt ? cnt.count : "bad"}
            </div>
        </div>
    );
};

export default Counter;
