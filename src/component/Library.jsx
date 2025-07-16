import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <h1>여기는 도서관입니다.<p/></h1>
            <Book name = "react"    price = {"10,000"}/>
            <Book name = "vue"      price = {"10,000"}/>
            <Book name = {"script"}   price = {"10,000"}/>
        </div>
    );

}

export default Library;