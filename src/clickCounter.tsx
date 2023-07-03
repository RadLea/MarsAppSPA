import React, {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

export function ClickCounter() {
    const [clickCount,setClickCount] = useState(0);

    function incrementCount() {
        setClickCount(clickCount + 1);
        localStorage.setItem("clickCount", (clickCount + 1).toString());
    }

    useEffect(() => {
        setClickCount(Number (localStorage.getItem("clickCount")));
    }, []);

    return (
        <>
            <p style={{fontSize:20, color:"#ff5a00", padding:20}}>You pressed me {clickCount} times</p>
            <button onClick={incrementCount}>
                Press to increase count
            </button>
        </>
    );
}