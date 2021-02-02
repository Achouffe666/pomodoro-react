// index.js
import React, {useState} from "react";
import {render} from "react-dom";
import {Clock} from "./clock.js";
import Timer from "./timer.js";
import Modal from "./modal.js";

function Main() {
    const [isOpen, setIsOpen] = useState(false);
    const refreshPage = () => {
        window.location.reload();
    };
    return (
        <div className={"main"}>
            <button type={"button"} onClick={() => setIsOpen(true)}>
                {"Open modal"}
            </button>
            <Clock />
            <Timer />
            <Modal
                reset={refreshPage}
                open={isOpen}
                onClose={() => setIsOpen(false)}>
                {"Timer is finished, what do you want to do now?"}
            </Modal>
        </div>
    );
}

render(<Main />, document.querySelector("#root"));

//npx eslint src --fix
