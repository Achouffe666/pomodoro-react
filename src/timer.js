import React, {useState, useEffect} from "react";

const Timer = () => {
    const time = 900;
    const [seconds, setSeconds] = useState(time);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }
    function reset() {
        setSeconds(time);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(() => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div>
            <div>
                <span>
                    {seconds}
                    {"Sec"}
                </span>
            </div>
            <div>
                <button
                    type={"button"}
                    className={isActive ? "active" : "inactive"}
                    onClick={toggle}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <button type={"button"} onClick={reset}>
                    {"Reset"}
                </button>
            </div>
        </div>
    );
};

export default Timer;
