import React from "react";
import { Link } from "react-router-dom";

export default function HomePage () {
    return (
        <>
        <h1 style={{color: "green"}}>
            Home Page
        </h1>
        <Link to="/Popular">Go to Popular</Link>
        <Link to="/Battle">Go to Battle</Link>
        </>
    )
}