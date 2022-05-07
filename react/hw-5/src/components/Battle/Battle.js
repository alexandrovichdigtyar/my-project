import React from "react";
import { Link } from "react-router-dom";

export default function Battle() {
    return (
        <>
            <h1 style={{ color: "green" }}>
                Battle
            </h1>
            <Link to="/Popular">Go to Popular</Link>
            <Link to="/">Go to Home</Link>
        </>
    )
}