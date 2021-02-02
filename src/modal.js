import React from "react";
import ReactDom from "react-dom";

export default function Modal({open, children, onClose, reset}) {
    if (!open) {
        return null;
    }
    return ReactDom.createPortal(
        <>
            <div className={"overlay"} />
            <div className={"modal"}>
                <p>{children}</p>
                <br />
                <div className={"container"}>
                    <button type={"button"} onClick={reset}>
                        {"Start new!"}
                    </button>
                    <button type={"button"} onClick={onClose}>
                        {"Close modal"}
                    </button>
                </div>
            </div>
        </>,
        document.querySelector("#portal"),
    );
}

// ne pas mettre 2X le nom
// je I not i
// esapcement entre les titres et txt
// photo ecrasé
// good to know about me sans :
// espacements les même partout, titres les memes aussi
// junior web developer en grand a coté du nom
