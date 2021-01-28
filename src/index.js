// index.js
import React from "react";
import {render} from "react-dom";
import {Clock} from "./clock.js";
import Timer from "./timer.js";

function Welcome({children}) {
    return (
        <div>
            <h1>{"Bonjour, "}</h1>

            <p>{children}</p>
            <Clock />
            <Timer />
        </div>
    );
}

render(
    <Welcome> {"Bienvenue à vous!"}</Welcome>,

    document.querySelector("#root"),
);

//npx eslint src --fix
