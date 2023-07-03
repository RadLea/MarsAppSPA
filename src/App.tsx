import React from 'react';
import './App.css';
import {Nasa} from "./info";
import Earth from "./media/earth.png"
import {threeTagProp} from "./componentProp";
import NasaPic from "./media/nasa.jpeg";

function App() {

    const prop: threeTagProp = {
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
        image: NasaPic,
        imageAlt: "Nasa logo"
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={Earth} className="App-logo" alt="logo"/>
                <Nasa {...prop}/>
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

export default App;
