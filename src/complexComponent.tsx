import React, {createContext, useContext, useState} from "react";
import {json} from "stream/consumers";

const CounterContext = createContext(0);

export function ComplexComponent() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <CounterContext.Provider value={count}>
                    <Component3/>
                    <Component2 func={() => {
                        setCount(count + 1);
                    }}/>
                </CounterContext.Provider>
            </header>
        </div>
    );
}

function Component2({func}: { func: any }) {
    return (
        <>
            <button style={{marginTop: 40}} className="button-77" onClick={func}>Press to increase counter</button>
        </>
    );
}

function Component3() {
    return (
        <>
            <p style={{fontSize: 50, textAlign: "justify", padding: 10, color: "bisque"}}>
                Hello from the tree
            </p>
            <Component4/>
        </>
    );
}

function Component4() {
    const count = useContext(CounterContext);
    return (
        <>
            <p style={{fontSize: 40, textAlign: "justify", padding: 10, color: "bisque"}}>
                You pressed {count} times!
            </p>
        </>
    );
}