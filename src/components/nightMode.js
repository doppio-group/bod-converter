import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import "./nightMode.css"
import {
    useComponentDidMount,
    useComponentDidUpdate,
    useComponentWillUnmount
} from "./utils";

export class NightMode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (typeof window === "undefined") {
            return;
        }
        var checkbox = document.getElementById('nightModeCheckBox');

        checkbox.checked = this.props.isDarkMode;

        console.log("Night mode mounted. Dark Mode: " + this.props.isDarkMode);

        if (this.props.isDarkMode) {
            document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-light)');
            document.getElementById("")

        } else {
            document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');

        }
    }

    render() {

        var currentDarkMode = false;;
        const isBrowser = typeof window !== "undefined";
        var _this = this;

        (function () {
            if (!isBrowser) {
                return;
            }
            var defaultDarkMode = window.localStorage.getItem("darkMode");
            var checkbox = document.getElementById('nightModeCheckBox');

            defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;
            currentDarkMode = defaultDarkMode;

            console.log("Current Dark Mode: " + currentDarkMode);

        })();
        return (
            <div className="nightModeSwitcher">
                <input type="checkbox" id="nightModeCheckBox" className="checkbox" onChange={e => { switcher(e); this.props.darkModeHandler(e) }} />
                <label htmlFor="nightModeCheckBox" className="switch_bg">
                    <div className="switch_slider"></div>
                    <div className="switch_button">
                        <FaMoon className='fa-solid faMoon' color='white' size={'25px'} />
                        <FaSun className='fa-solid faSun' color='white' size={'25px'} />
                        {/* <i className="fa-solid fa-moon"></i> */}
                    </div>
                </label>
            </div>

        )
    }
}


function switcher(event) {
    const checkbox = document.getElementById('nightModeCheckBox');
    // console.log(checkbox)
    // checkbox.addEventListener('change', () => {
    //     if(checkbox.ariaChecked){
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // })
    if (event.target.checked) {
        document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
        document.documentElement.style.setProperty('--color-text', 'var(--color-light)');
        localStorage.setItem("darkMode", "true");

    } else {
        document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
        document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');
        localStorage.setItem("darkMode", "false");
    }
}