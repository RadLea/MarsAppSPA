import React, {useEffect, useState} from 'react';
import './App.css';
import {Nasa} from "./info";
import {RoverProp, ThreeTagProp} from "./componentProp";
import NasaPic from "./pics/nasa.jpeg";
import {ClickCounter} from "./clickCounter";
import {ComplexComponent} from "./complexComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Sidebar} from "./Sidebar";
import axios from 'axios'
import {RoverForm} from "./form";
import {Cats} from "./Cats";
import Logo from "./pics/200px-NASA_Worm_logo.svg_.png"


function App() {

    const client = axios.create({
        baseURL: 'http://localhost:8008'
    });

    const [rovers, setRovers] = useState([]);
    useEffect(() => {
        client.get('/rovers').then((response) => setRovers(response.data));
    }, []);


    const prop: ThreeTagProp = {
        title: "NASA",
        para1: "NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA)," +
            " to give the U.S. space development effort a distinctly civilian orientation, emphasizing peaceful " +
            "applications in space science.NASA has since led most American space exploration, including Project " +
            "Mercury, Project Gemini, the 1968–1972 Apollo Moon landing missions, the Skylab space station, and " +
            "the Space Shuttle.",
        para2: "Plans for human spaceflight began in the U.S. Armed Forces prior to NASA's creation. The Air " +
            "Force's Man in Space Soonest and the Army's Project Adam served as the foundation for Project Mercury," +
            " the first American program to put people in space. NASA established the Space Task Group to manage " +
            "the program, which would conduct sub-orbital flights with the Army's Redstone rockets and orbital " +
            "flights with the Air Force's Atlas launch vehicles.",
        image: Logo,
        imageAlt: "Nasa logo"
    }

    const roverProps: RoverProp = {
        roverList: rovers
    };

    return (
        <><Sidebar/><Router>
            <Routes>
                <Route path="/" element={<Nasa {...prop} />}/>
                <Route path="/complex" element={<ComplexComponent/>}/>
                <Route path="/simple" element={<ClickCounter/>}/>
                <Route path="/rovers" element={<RoverForm {...roverProps} />}/>
                <Route path="/cats" element={<Cats/>}/>
            </Routes>
        </Router></>
    );
}

export default App;
