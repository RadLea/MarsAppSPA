import React from 'react';
import MyPic from "./media/nasa.jpeg";
import { threeTagProp } from "./componentProp";

export function Nasa( props: threeTagProp ) {
    document.title = props.title;
    return (
        <>

            <p style={{fontSize:20, color:"#ff5a00", padding:20}}>{props.para1}</p>
            <img src={props.image} alt={props.imageAlt}/>
            <p style={{fontSize:20, color:"#ff5a00", padding:20}}>{props.para2}</p>
        </>
    );
}