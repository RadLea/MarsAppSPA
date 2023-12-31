import React from 'react';
import './Sidebar.css';
import {slide as Menu} from "react-burger-menu";

export function Sidebar() {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/simple">
                Simple Counter
            </a>
            <a className="menu-item" href="/complex">
                Complex Counter
            </a>
            <a className="menu-item" href="/rovers">
                Rovers
            </a>
            <a className="menu-item" href="/cats">
                Cats &#128008;
            </a>
        </Menu>
    );
};