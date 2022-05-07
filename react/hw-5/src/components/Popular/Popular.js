import React from "react";
import { Link } from "react-router-dom";

export default function Popular() {
    return (
        <>
            <h1 style={{ color: "green" }}>
                Popular
            </h1>
            <Link to="/">Go to Home</Link>
            <Link to="/Battle">Go to Battle</Link>
        </>
    )
}