// index.js
import React from "react";
import {render} from "react-dom";
import Clock from "./clock.js";

function Welcome({name, age, children}) {
    return (
        <div>
            <h1>
                {"Bonjour, "}
                {name}
            </h1>
            <h6>
                {"Vous avez "}
                {age}
                {" ans"}
            </h6>
            <p>{children}</p>
            <Clock />
        </div>
    );
}
render(
    <Welcome name={"Jean"} age={34}>
        {" "}
        {"Bienvenue à vous!"}
    </Welcome>,
    document.querySelector("#root"),
);
//npx eslint src --fix
