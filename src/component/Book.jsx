import React from "react";

function Book(props) {
    return (
        <div>
            <h2>{`책의 이름은 : ${props.name}`}</h2>
            <h3>{`책의 가격은 : ${props.price}`}</h3>
        </div>
    );
}

export default Book;