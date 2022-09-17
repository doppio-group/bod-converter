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
        // var defaultDarkMode = window.localStorage.getItem("darkMode");
        // var checkbox = document.getElementById('nightModeCheckBox');

        // defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;

        // console.log("Default Dark Mode: " + defaultDarkMode);

        // checkbox.checked = defaultDarkMode;

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

        // useEffect(() => { }, [])

        // useComponentDidMount(() => {
        //     if (!isBrowser) {
        //         return;
        //     }
        //     var defaultDarkMode = window.localStorage.getItem("darkMode");
        //     var checkbox = document.getElementById('nightModeCheckBox');

        //     defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;

        //     // console.log("Default Dark Mode: " + defaultDarkMode);

        //     checkbox.checked = defaultDarkMode;

        //     if (checkbox.checked) {
        //         document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
        //         document.documentElement.style.setProperty('--color-text', 'var(--color-light)');
        //         document.getElementById("")

        //     } else {
        //         document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
        //         document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');

        //     }
        // });

        (function () {
            if (!isBrowser) {
                return;
            }
            var defaultDarkMode = window.localStorage.getItem("darkMode");
            var checkbox = document.getElementById('nightModeCheckBox');

            defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;
            currentDarkMode = defaultDarkMode;

            console.log("Current Dark Mode: " + currentDarkMode);

            // setTimeout(() => {
            //     var defaultDarkMode = window.localStorage.getItem("darkMode");
            //     var checkbox = document.getElementById('nightModeCheckBox');

            //     defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;

            //     // console.log("Default Dark Mode: " + defaultDarkMode);

            //     checkbox.checked = _this.props.isDarkMode;

            //     if (checkbox.checked) {
            //         document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
            //         document.documentElement.style.setProperty('--color-text', 'var(--color-light)');

            //     } else {
            //         document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
            //         document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');

            //     }
            // }, 100);
        })();
        return (
            <div className="nightModeSwitcher">
                {/* <input type="checkbox" className="checkbox" id="nightModeCheckBox" onChange={switcher} />
            <label htmlFor="nightModeCheckBox" className="label">
                <FaMoon color='white' size={'15px'} />
                <FaSun color='yellow' size={'15px'} />
                <div className='ball' />
            </label> */}
                {/* {this.props.isDarkMode ?
                    <input type="checkbox" id="nightModeCheckBox" className="checkbox" checked onChange={e => { switcher(e); this.props.darkModeHandler(e) }} />
                    : <input type="checkbox" id="nightModeCheckBox" className="checkbox" onChange={e => { switcher(e); this.props.darkModeHandler(e) }} />} */}

                <input type="checkbox" id="nightModeCheckBox" className="checkbox" onChange={e => { switcher(e); this.props.darkModeHandler(e) }} checked={this.props.isDarkMode ? this.props.isDarkMode : false} />
                <label htmlFor="nightModeCheckBox" className="switch_bg">
                    <div className="switch_slider"></div>
                    <div className="switch_button">
                        <FaMoon className='fa-solid faMoon' color='white' size={'25px'} />
                        <FaSun className='fa-solid faSun' color='white' size={'25px'} />
                        {/* <i className="fa-solid fa-moon"></i> */}
                    </div>
                </label>
                {/* <label for="checkbox">
                <input type="checkbox" name="nightModeCheckBox" id="nightModeCheckBox" />
                <div className="toggle">
                    <svg id="graphic" viewBox="0 0 132.29 132.29" xmlns="http://www.w3.org/2000/svg">
                        <g id="sung">
                            <path id="sun" d="m99.722 66.146a33.576 33.576 0 0 1-33.576 33.576 33.576 33.576 0 0 1-33.576-33.576 33.576 33.576 0 0 1 33.576-33.576 33.576 33.576 0 0 1 33.576 33.576" />
                            <g id="sunshine" transform="matrix(.92602 0 0 .92602 -10.774 -58.541)">
                                <path transform="matrix(0 .58145 -.59067 0 145.26 159.26)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(-.41115 .41115 -.41766 -.41766 109.64 196.03)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(-.58145 0 0 -.59067 58.451 196.84)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(-.41115 -.41115 .41766 -.41766 21.685 161.22)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(0 -.58145 .59067 0 20.875 110.03)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(.41115 -.41115 .41766 .41766 56.495 73.269)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(.58145 0 0 .59067 107.68 72.459)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                                <path transform="matrix(.41115 .41115 -.41766 .41766 144.45 108.08)" d="m-19.4 32.282h-45.867l22.934-39.722z" />
                            </g>
                        </g>
                        <path id="croissant" d="m55.461 34.281a33.587 33.587 0 0 0-22.874 31.832 33.587 33.587 0 0 0 33.587 33.587 33.587 33.587 0 0 0 30.441-19.395 31.187 31.187 0 0 1-17.268 5.2174 31.187 31.187 0 0 1-31.187-31.187 31.187 31.187 0 0 1 7.3022-20.053z" />
                    </svg>

                </div>
            </label> */}
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