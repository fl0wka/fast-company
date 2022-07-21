import React, { useState } from "react";

// Реализовал компонент без передачи props { status, ...rest }
const BookMark = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <button onClick={toggleClass}>
            <i className={`bi bi-star${isActive ? "-fill" : ""}`}></i>
        </button>
    );
};

export default BookMark;
