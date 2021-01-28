//to do create 00:00
//to do create variable that will be the choosen
//to do decrement this variable every sec
// if 00:00 => return to first function choose
import React, {useState} from "react";

const Timer = () => {
    const [counter, setCounter] = useState(900);

    const timer = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <span>{counter}</span>
            <button onClick={timer} type={"button"}>
                {"Start"}
            </button>
        </div>
    );
};

export default Timer;
