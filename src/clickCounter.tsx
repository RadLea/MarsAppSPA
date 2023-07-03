import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ClickCounter() {
    const [clickCount, setClickCount] = useState(0);

    function incrementCount() {
        setClickCount(clickCount + 1);
        localStorage.setItem("clickCount", (clickCount + 1).toString());
    }

    function resetClick() {
        setClickCount(0);
        localStorage.setItem("clickCount", clickCount.toString());
    }
    function callToast() {
        toast("Counter Reset", {
            position: "bottom-center",
            autoClose: 3000,
        });
    }

    useEffect(() => {
        setClickCount(Number(localStorage.getItem("clickCount")));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p style={{fontSize: 40, textAlign: "justify", color: "#ff5a00", padding: 20}}>You pressed me {clickCount} times</p>
                <button className="button-36" onClick={incrementCount}>
                    Press to increase count
                </button>
                <button style={{marginTop: 40}} className="button-36" onClick={() => {
                    resetClick();
                    callToast();
                }}>
                    Press to reset count
                </button>
                <ToastContainer />
            </header>
        </div>
    );
}