import React, {createContext, useContext, useState} from "react";

const CounterContext = createContext(0);

export function ComplexComponent() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CounterContext.Provider value={count}>
                <Component2 func={() => {
                    setCount(count + 1);
                }}/>
                <Component3 />
            </CounterContext.Provider>
        </>
    );
}

function Component2({ func }: {func: any}) {
    const count = useContext(CounterContext);
    return (
        <>
            <button onClick={func}>Press to increase counter</button>
        </>
    );
}

function Component3() {
    return (
        <>
            <Component4/>
            <p style={{fontSize: 15, padding: 10, color: "bisque"}}>
                Hello from the tree
            </p>
        </>
    );
}

function Component4() {
    const count = useContext(CounterContext);
    return (
        <>
            <p style={{fontSize: 15, padding: 10, color: "bisque"}}>
                You pressed {count} times!
            </p>
        </>
    );
}