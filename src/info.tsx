import React from 'react';
import {ThreeTagProp} from "./componentProp";
import Earth from "./pics/earth.png";

export function Nasa(props: ThreeTagProp) {
    document.title = props.title;
    return (
        <>
            <div>
                <img src={Earth} className="App-logo" alt="logo"/>
            </div>
            <div className={"full-page"}>
                <div className={"flex-container"}>

                    <div className={"para-flex"}>
                        <p>{props.para1}</p>
                    </div>
                    <div className={"para-flex"}>
                        <p>{props.para2}</p>
                    </div>
                </div>
            </div>
            <div className={"link"}>
                <a
                    className="App-link"
                    href="https://www.nasa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Nasa for more
                </a>
            </div>
            <div className={"corner-image-left"}>
                <img style={{width: "200px"}} src={props.image} alt={props.imageAlt}/>
            </div>
        </>
    );
}