import React from 'react';
import {ThreeTagProp} from "./componentProp";
import Earth from "./pics/earth.png";

export function Nasa(props: ThreeTagProp) {
    document.title = props.title;
    return (
        <div className="App">
            <header className="App-header">
                <img src={Earth} className="App-logo" alt="logo"/>
                <p style={{fontSize: 20, textAlign: "center", color: "#ff5a00", padding: 20}}>{props.para1}</p>
                <img src={props.image} alt={props.imageAlt}/>
                <p style={{fontSize: 20, textAlign: "center", color: "#ff5a00", padding: 20}}>{props.para2}</p>
                <a
                    className="App-link"
                    href="https://www.nasa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Nasa for more
                </a>

            </header>
        </div>
    );
}