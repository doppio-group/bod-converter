import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa"

import "./nightMode.css"

function nightMode() {

    return (
        <div className="nightModeSwitcher">
            <input type="checkbox" className="checkbox" id="nightModeCheckBox" onChange={switcher} />
            <label htmlFor="nightModeCheckBox" className="label">
                {/* <i className="fas fa-moon"></i>
                <i className='fas fa-sun'></i> */}
                <FaMoon color='white' size={'15px'} />
                <FaSun color='yellow' size={'15px'} />
                <div className='ball' />
            </label>
        </div>

    )

}

function switcher(event) {
    const checkbox = document.getElementById('nightModeCheckBox');
    console.log(checkbox)
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


export default nightMode