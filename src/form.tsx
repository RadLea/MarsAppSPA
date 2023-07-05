import React, {useEffect, useMemo, useState} from "react";
import Select, {SingleValue} from "react-select";
import axios from "axios";
import {ImageList, ImageListItem} from "@mui/material";
import "./Form.css"

export interface RoverProp {
    roverList: string[];
}

export interface SelectOptions {
    value: string;
    label: string;
}

export function RoverForm(prop: RoverProp) {
    const [showResults, setShowResults] = React.useState(false)
    const [roverForCamera, setRoverForCamera] = useState("");

    const optionsFromProp: SelectOptions[] = useMemo(() => prop.roverList.map((rover) => ({
        value: rover,
        label: rover
    })), [prop.roverList]);

    function handleSelectChange(selectedOption: SingleValue<SelectOptions>) {
        if (selectedOption !== null) {
            setRoverForCamera(selectedOption.value);
            setShowResults(true);
        }
    }

    return (
        <div className={"App"}>
            <div className={"App-header"}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "80%"}}>
                    <Select placeholder={"Select Rover"} className="select" onChange={handleSelectChange} options={optionsFromProp}/>
                    {showResults ? <CameraForm rover={roverForCamera}/> : null}
                </div>
            </div>
        </div>
    );

}

export interface CameraProp {
    rover: string;
}

function CameraForm(prop: CameraProp) {
    const [cameras, setCameras] = useState([]);
    const [selectedCameraOption, setSelectedCameraOption] = useState<SingleValue<SelectOptions>>(null);
    const [showPictures, setShowPictures] = useState(false);

    useEffect(() => {
        setSelectedCameraOption(null);
        axios.get(`http://localhost:8008/rovers/camera/${prop.rover}`).then((response) => setCameras(response.data));
    }, [prop.rover]);

    const optionsFromProp: SelectOptions[] = useMemo(() => cameras.map((camera) => ({
        value: camera,
        label: camera
    })), [cameras]);

    if (selectedCameraOption !== null) {
        return (
            <div className={"App-header"}>
                <Select placeholder={"Select Camera"} className="select" value={selectedCameraOption}
                        onChange={(selectedCamera) => {
                            setSelectedCameraOption(selectedCamera);
                            setShowPictures(true);
                        }} options={optionsFromProp}/>
                <br/>
                {showPictures ? <Pictures rover={prop.rover} camera={selectedCameraOption.value}/> : null}
            </div>
        );
    } else {
        return (
            <div>
                <Select placeholder={"Select Camera"} className="select" value={selectedCameraOption}
                        onChange={(selectedCamera) => {
                            setSelectedCameraOption(selectedCamera);
                            setShowPictures(true);
                        }} options={optionsFromProp}/>
            </div>
        );
    }
}

export interface PicturesProp {
    rover: string;
    camera: string;
}

function Pictures(prop: PicturesProp) {
    const [picList, setPicList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8008/rovers/${prop.rover}/photos/${prop.camera}`).then((response) => setPicList(response.data));
    }, [prop.rover, prop.camera]);

    return (
        <div style={{padding: "10px", border: "3px solid orangered", borderRadius: "40px"}}>
            <ImageList
                variant="quilted"
                rowHeight={300}
                cols={5}
                gap={10}
            >
                {picList.slice(0, 5).map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={item}
                            alt={`Photo ${index + 1}`}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}