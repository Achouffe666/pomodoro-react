import React, {useState, useEffect} from "react";

let time = 5;

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

    function increment() {
        if (!isActive) {
            setSeconds(time++);
        }
    }
    function decrement() {
        if (!isActive) {
            setSeconds(time--);
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

    return (
        <div className={"timer"}>
            <div>
                <h6>{"Time remaining: "}</h6>
                <div className={"counter"}>
                    <span>{seconds}</span>
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
                    <button type={"button"} onClick={increment}>
                        {"+"}
                    </button>
                    <button type={"button"} onClick={decrement}>
                        {"-"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
