// index.js
import React from "react";
import {render} from "react-dom";
import {Clock} from "./clock.js";
import Timer from "./timer.js";

function Welcome() {
    return (
        <div className={"main"}>
            <Clock />
            <Timer />
        </div>
    );
}

render(
    <Welcome />,

    document.querySelector("#root"),
);

//npx eslint src --fix
