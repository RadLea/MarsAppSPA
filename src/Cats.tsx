import {useEffect, useState} from "react";
import axios from "axios";
import {ImageList, ImageListItem} from "@mui/material";
import "./CatButton.css"

interface Cat {
    url: string;
}

export function Cats() {
    const [cats, setCats] = useState<Cat[]>([]);
    const [btn, setBtn] = useState<boolean>(false);
    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=9").then(
            (response) => setCats(response.data));
    }, [btn]);
    return (
        <div className={"App-header"}>
            <h1 style={{color: "orangered"}}>
                Your daily dose of cats
            </h1>
            <ImageList cols={3} rowHeight={164} sx={{width: 600, height: 510}}>
                {cats.slice(0,9).map((item: Cat, index: number) => (
                    <ImageListItem key={index}>
                        <img src={`${item.url}`} alt="cat"/>
                    </ImageListItem>
                    ))}
                </ImageList>
            <button className='button-89' onClick={() => setBtn(!btn)}>Press for more cats</button>
        </div>
    );
}