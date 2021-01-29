import React, {useState, useEffect} from "react";

const time = 900;

const Timer = () => {
    const [seconds, setSeconds] = useState(time);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }
    function reset() {
        setSeconds(time);
        setIsActive(false);
        document.querySelector(".counter").classList.remove("finish");
    }

    function incrementMin() {
        if (!isActive) {
            setSeconds(t => t + 60);
        }
    }
    function decrementMin() {
        if (!isActive) {
            setSeconds(t => t - 60);
        }
    }

    function incrementSec() {
        if (!isActive) {
            setSeconds(t => t + 1);
        }
    }
    function decrementSec() {
        if (!isActive) {
            setSeconds(t => t - 1);
        }
    }
    function stop() {
        if (seconds === 0) {
            toggle();
            document.querySelector(".counter").classList.add("finish");
        }
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            stop();
            interval = setInterval(() => {
                setSeconds(() => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const minutes =
        Math.floor(seconds / 60) < 10
            ? `0${Math.floor(seconds / 60)}`
            : Math.floor(seconds / 60);
    const secondes =
        seconds - minutes * 60 < 10
            ? `0${seconds - minutes * 60}`
            : seconds - minutes * 60;

    return (
        <div className={"timer"}>
            <div>
                <h6>{"Time remaining: "}</h6>
                <div className={"counter"}>
                    <span>
                        {minutes}
                        {":"}
                        {secondes}
                    </span>
                </div>
                <div className={"buttons"}>
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
                <div className={"buttons"}>
                    <button type={"button"} onClick={incrementMin}>
                        {"Minutes +"}
                    </button>
                    <button type={"button"} onClick={decrementMin}>
                        {"Minutes -"}
                    </button>
                    <button type={"button"} onClick={incrementSec}>
                        {"Seconds +"}
                    </button>
                    <button type={"button"} onClick={decrementSec}>
                        {"Seconds -"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
