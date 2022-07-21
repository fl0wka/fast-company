import React from "react";

// Передавал в props массив объектов. Реализовал без props { color, name, _id }
const Qualitie = ({ qualitie }) => {
    // console.log(qualitie);
    return qualitie.map((value) => {
        return (
            <span key={value._id} className={`badge bg-${value.color} m-1`}>
                {value.name}
            </span>
        );
    });
};

export default Qualitie;
