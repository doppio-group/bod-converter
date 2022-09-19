import React from 'react'
import "./loading.css"

function Loading() {
    return (
        <div className="spinner-box">
            {/* <div className="loader"></div> */}
            <span>Converting...</span>
        </div>
    )
}

export default Loading