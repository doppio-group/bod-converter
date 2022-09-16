import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "../components/customForm.css"
import Footer from './footer'
import Loading from './loading'

class CustomForm extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isDarkMode: false
    //     };
    // }

    render() {

        var currentDarkMode = false;
        const isBrowser = typeof window !== "undefined";
        var _this = this;
        console.log(this.props.isDarkMode)

        // (function () {
        //     if (!isBrowser) {
        //         return;
        //     }
        //     var defaultDarkMode = window.localStorage.getItem("darkMode");
        //     var checkbox = document.getElementById('nightModeCheckBox');

        //     if (checkbox == null || checkbox == undefined) {
        //         _this.setState({ isDarkMode: false })
        //         return
        //     }

        //     defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;
        //     currentDarkMode = defaultDarkMode;

        //     console.log("Current Dark Mode: " + currentDarkMode);

        //     setTimeout(() => {
        //         var defaultDarkMode = window.localStorage.getItem("darkMode");

        //         defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;

        //         // console.log("Default Dark Mode: " + defaultDarkMode);

        //         // checkbox.checked = defaultDarkMode;

        //         if (checkbox.checked) {
        //             _this.setState({ isDarkMode: true })

        //         } else {
        //             // document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
        //             // document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');
        //             _this.setState({ isDarkMode: false })
        //         }
        //     }, 100);
        // })();

        return (
            <div>
                <div className='container' >
                    <div className='customForm'>
                        <label htmlFor={'zapFile'} className={"input"}>
                            <br />
                            <input type={'file'} id={'zapFile'} accept={'.zap'} className="input__field" />
                            <span className="input__label">Zap File</span>
                        </label>
                        <br />

                        <label className="input">
                            <br />
                            <input type='text' id='bodNoun' className="input__field" />
                            <span className="input__label">BOD Noun</span>
                        </label>
                        <br />
                        <label className="input">
                            <br />
                            <select name="bodVerb" id="bodVerb" className="input__field">
                                <option value="Load" className='customOption'>Load</option>
                                <option value="Process" className='customOption'>Process</option>
                                <option value="Sync" className='customOption'>Sync</option>
                            </select>
                            <span className="input__label">BOD Verb</span>
                        </label>
                        <br />
                        <label className="input">
                            <br />
                            <select name="bodDirection" id="bodDirection" className="input__field">
                                <option value="In" className='customOption'>In</option>
                                <option value="Out" className='customOption'>Out</option>
                            </select>
                            <span className="input__label">BOD Direction</span>
                        </label>
                        <br />

                        <label className="input">
                            <br />
                            <input type='text' id='bodPrefix' className="input__field" />
                            <span className="input__label">BOD Prefix (Optional)</span>
                        </label>
                        <br />

                        <label className="input">
                            <br />
                            <textarea id='customEnvelope' className="input__field" rows="2" />
                            <span className="input__label">Custom Envelope (Optional)</span>
                        </label>
                        <br />

                        <button id={'submitConverter'} onClick={convertBOD}>Convert</button>
                    </div>
                    <div className='doppioLogo'>
                        {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(-50.000000,500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M2648 4965 c-111 -18 -221 -55 -328 -111 -284 -147 -497 -428 -558
-737 l-15 -77 -36 7 c-20 5 -90 8 -156 7 -103 0 -129 -4 -187 -26 -188 -71
-314 -197 -386 -386 -24 -60 -26 -81 -26 -202 0 -116 3 -144 23 -200 67 -189
213 -333 404 -397 l82 -28 708 -3 707 -3 0 266 c0 244 -1 266 -17 271 -59 17
-148 72 -187 115 -208 231 -83 586 225 641 161 28 334 -66 408 -222 23 -48 26
-68 26 -160 0 -96 -3 -110 -29 -165 -49 -98 -133 -169 -248 -208 -17 -6 -18
-28 -18 -272 l0 -266 608 3 c589 4 609 5 687 26 330 91 563 343 620 667 19
110 19 180 0 290 -57 325 -296 582 -620 665 -150 39 -360 26 -503 -31 -29 -12
-54 -20 -55 -18 -169 285 -408 466 -708 539 -112 27 -306 34 -421 15z"/>
                        <path d="M2880 3937 c-49 -16 -126 -95 -139 -143 -44 -159 58 -298 219 -299
82 0 148 35 190 101 95 151 -1 339 -179 350 -31 2 -72 -2 -91 -9z"/>
                        <path d="M757 2324 c-332 -60 -607 -323 -687 -656 -29 -122 -28 -295 4 -420
76 -302 298 -531 603 -625 88 -27 89 -27 451 -31 199 -2 362 -5 362 -6 0 -27
70 -256 90 -296 64 -127 176 -225 308 -269 62 -21 67 -21 1090 -19 l1027 3 79
38 c103 49 209 153 253 247 20 43 105 350 248 895 242 928 237 898 179 1005
-31 57 -65 89 -128 123 l-41 22 -777 3 -778 2 0 -370 c0 -289 3 -370 13 -370
6 0 39 -13 72 -29 72 -34 143 -106 182 -181 25 -50 28 -65 28 -160 0 -99 -2
-109 -33 -172 -40 -83 -119 -158 -200 -189 -44 -18 -77 -23 -147 -23 -121 0
-190 30 -274 120 -78 83 -104 149 -105 264 -1 75 3 93 30 150 17 36 44 80 60
99 37 44 137 109 180 117 l34 6 0 369 0 369 -1022 -1 c-834 -1 -1037 -3 -1101
-15z m412 -511 c64 -248 183 -702 187 -716 5 -17 -7 -18 -258 -15 -247 3 -266
5 -320 26 -81 33 -160 108 -200 190 -31 62 -33 74 -33 167 0 87 3 107 26 155
36 76 97 141 167 178 82 44 116 50 279 51 l142 1 10 -37z"/>
                    </g>
                </svg> */}
                        {
                            this.props.isDarkMode == true ? <StaticImage
                                className='logo'
                                src="../images/dopio-lockup-white.png"
                                width={175}
                                alt={"Doppio Group"}
                                quality="100"
                            /> : <StaticImage
                                className='logo'
                                src="../images/dopio-lockup-black.png"
                                width={175}
                                alt={"Doppio Group"}
                                quality="100"
                            />
                        }
                    </div>
                    <div className='instructions'>
                        <h3>Instructions</h3>
                        <ol className='instructionsList'>
                            <li>Select a .zap File</li>
                            <li>Enter the BOD Noun. <i>BOD Noun must start with a letter and cannot contain spaces</i></li>
                            <li>Select the required BOD Verb</li>
                            <li>Select the required BOD Direction</li>
                            <li>Enter the BOD Prefix. <i>This is optional. If empty, "M3BOD" will be used as the prefix</i></li>
                            <li>Provide the Custom Envelope XML if needed. Click <i className="envelopeHelper" id="envelopeHelper" onClick={customEnvelopeModal}>here</i> for an example</li>
                            <li>Click the Convert button and wait for a few seconds</li>
                            <li>The output file will be downloaded</li>
                        </ol>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function convertBOD() {
    console.log("Converting...")

    const fileInput = document.getElementById("zapFile");
    const bodNoun = document.getElementById("bodNoun").value.trim();
    const bodVerb = document.getElementById("bodVerb").value.trim();
    const bodDirection = document.getElementById("bodDirection").value.trim();
    const bodPrefix = document.getElementById("bodPrefix").value.trim();
    const customEnvelope = document.getElementById("customEnvelope").value.trim();

    if (!validateInputs()) {
        return;
    }

    createLoadingModal();


    // WARNING: For POST requests, body is set to null by browsers.
    var data = new FormData();
    data.append("ZapFile", fileInput.files[0], "/C:/Users/ajay/Downloads/TMS_Websettle.zap");
    data.append("BodNoun", bodNoun);
    data.append("BodVerb", bodVerb);
    data.append("Direction", bodDirection);
    data.append("Prefix", bodPrefix);
    data.append("CustomEnvelope", customEnvelope);

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        var _this = this;
        if (_this.readyState === 4) {
            console.log(_this);

            document.getElementById("overlay").parentElement.remove();

            if (_this.status === 200) {
                //*OK

                const fileName = _this.getResponseHeader("X-Filename")

                var blob = new Blob([_this.response], { type: 'image/pdf' });
                //Create a link element, hide it, direct 
                //it towards the blob, and then 'click' it programatically
                let a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                //Create a DOMString representing the blob 
                //and point the link element towards it
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                //programatically click the link to trigger the download
                a.click();
                //release the reference to the file by revoking the Object URL
                window.URL.revokeObjectURL(url);

            } else {
                if (_this.status === 500) {
                    //* Internal Error
                    errorMessagesModal(["Internal Server Error. Please contact administrator"]);
                } else if (_this.status === 400) {
                    errorMessagesModal([JSON.parse(_this.responseText).message]);
                } else {
                    var errorMesasge = ""
                    if (_this.responseText.trim() === "") {
                        errorMesasge = "Unkown error occurred. Please contact administrator"
                    }
                    errorMessagesModal([errorMesasge]);
                }
            }
        }
    });

    xhr.open("POST", "https://bod-generator-api.herokuapp.com/bod-generator");

    xhr.send(data);
}

function validateInputs() {
    const fileInput = document.getElementById("zapFile");
    const bodNoun = document.getElementById("bodNoun").value.trim();
    const bodVerb = document.getElementById("bodVerb").value.trim();
    // const bodVerb = "Yo";
    const bodDirection = document.getElementById("bodDirection").value.trim();
    const bodPrefix = document.getElementById("bodPrefix").value.trim();
    const customEnvelope = document.getElementById("customEnvelope").value.trim();

    var isValid = true;
    var errorMessages = [];

    if (fileInput.files.length != 1) {
        isValid = false;
        errorMessages.push("Zap File is not selected.");

        // return false;
    }

    if (bodNoun.trim() === "" || bodNoun.indexOf(" ") > -1 || !bodNoun.match(/^[a-zA-Z]/gm)) {
        isValid = false;
        errorMessages.push("Invalid BOD Noun entered.");

        // return false;
    }

    if (["LOAD", "PROCESS", "SYNC"].indexOf(bodVerb.toUpperCase()) === -1) {
        isValid = false;
        errorMessages.push("Invalid BOD Verb selected.");
        // return false;
    }

    if (["IN", "OUT"].indexOf(bodDirection.toUpperCase()) === -1) {
        isValid = false;
        errorMessages.push("Invalid BOD Direction selected.");
        // return false;
    }

    if (bodPrefix !== "" && (bodPrefix.indexOf(" ") > -1 || !bodPrefix.match(/^[a-zA-Z]/gm))) {
        isValid = false;
        errorMessages.push("Invalid BOD Prefix entered.");

        // return false;
    }

    console.log(errorMessages);

    if (errorMessages.length > 0) {
        errorMessagesModal(errorMessages);
    }

    return isValid;
}

function createLoadingModal() {
    console.log("Loading modal...");

    // var overLay = document.createElement("div");
    // overLay.id = "overlay";
    // document.body.appendChild(overLay);

    var a = document.createElement("div");
    document.body.appendChild(a);

    render(
        <>
            <div id='overlay'></div>
            <div className='modal' id='loadingModal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <Loading />
                    </div>
                </div>
            </div>
        </>

        , a
    )




    const isVisible = "is-visible";
    document.getElementById("loadingModal").classList.add(isVisible);
    document.getElementById("overlay").style.display = "block";

    //     var loadingModal = document.createElement("div");
    //     loadingModal.className = "modal";
    //     loadingModal.id = "loadingModal";

    //     var loadingModalDialog = document.createElement("div");
    //     loadingModalDialog.className = "modal-dialog";

    //     // var loadingModalHeader = document.createElement("header");
    //     // loadingModalHeader.className = "modal-header";
    //     // loadingModalHeader.textContent = "Error!"

    //     var loadingModalContent = document.createElement("section");
    //     loadingModalContent.className = "modal-content";

    //     loadingModalDialog.appendChild(loadingModalContent);
    //     loadingModal.appendChild(loadingModalDialog);

    //     var overLay = document.createElement("div");
    //     overLay.id = "overlay";

    //     document.body.appendChild(overLay);
    //     document.body.appendChild(loadingModal);

    //     const isVisible = "is-visible";
    //     document.getElementById("loadingModal").classList.add(isVisible);
    //     document.getElementById("overlay").style.display = "block";
}

function errorMessagesModal(errorMessages) {
    var errorModal = document.createElement("div");
    errorModal.className = "modal";
    errorModal.id = "errorModal";

    var errorModalDialog = document.createElement("div");
    errorModalDialog.className = "modal-dialog";

    var errorModalHeader = document.createElement("header");
    errorModalHeader.className = "modal-header";
    errorModalHeader.textContent = "Error!"

    var errorModalContent = document.createElement("section");
    errorModalContent.className = "modal-content";

    var errorList = document.createElement("ul");

    for (let index = 0; index < errorMessages.length; index++) {
        const errorMessage = errorMessages[index];

        var errorElement = document.createElement("li");
        errorElement.textContent = errorMessage;
        errorList.appendChild(errorElement);

    }

    errorModalContent.appendChild(errorList);


    var errorModalFooter = document.createElement("footer");
    errorModalFooter.className = "modal-footer";

    var closeButton = document.createElement("button");
    closeButton.className = "modalCloseButton";
    closeButton.textContent = "Okay";

    errorModalFooter.appendChild(closeButton);

    errorModal.appendChild(errorModalDialog);
    errorModalDialog.appendChild(errorModalHeader);
    errorModalDialog.appendChild(errorModalContent);
    errorModalDialog.appendChild(errorModalFooter);


    var overLay = document.createElement("div");
    overLay.id = "overlay";

    document.body.appendChild(overLay);
    document.body.appendChild(errorModal);



    const openEls = document.querySelectorAll("[data-open]");
    const isVisible = "is-visible";

    // for (const el of openEls) {
    //     el.addEventListener("click", function () {
    //         const modalId = this.dataset.open;
    //         document.getElementById(modalId).classList.add(isVisible);
    //     });
    // }

    document.getElementById("errorModal").classList.add(isVisible);
    document.getElementById("overlay").style.display = "block";


    closeButton.onclick = function (event) {
        console.log(event);
        document.getElementById("overlay").remove();
        document.getElementById("errorModal").remove();

    }

}

function customEnvelopeModal() {
    var envelopeModal = document.createElement("div");
    envelopeModal.className = "modal";
    envelopeModal.id = "envelopeModal";

    var envelopeModalDialog = document.createElement("div");
    envelopeModalDialog.className = "modal-dialog";

    var envelopeModalHeader = document.createElement("header");
    envelopeModalHeader.className = "modal-header";
    envelopeModalHeader.textContent = "Custom Envelope Example"

    var envelopeModalContent = document.createElement("section");
    envelopeModalContent.className = "modal-content";

    // var envelopeList = document.createElement("ul");

    // for (let index = 0; index < envelopeMessages.length; index++) {
    //     const envelopeMessage = envelopeMessages[index];

    //     var envelopeElement = document.createElement("li");
    //     envelopeElement.textContent = envelopeMessage;
    //     envelopeList.appendChild(envelopeElement);

    // }

    var envelopeXML = document.createElement("pre");
    envelopeXML.lang = "xml";

    envelopeXML.innerText = `<EDI_Envelope>
	<Header>
		<Message>message</Message>
		<Document>document</Document>
		<TradingPartner>tradingPartner</TradingPartner>
		<PartnerCode>partnerCode</PartnerCode>
	</Header>
	<Body>
		<BODConverterToolRoot>BODConverterToolRoot</BODConverterToolRoot>
	</Body>
</EDI_Envelope>`;

    envelopeModalContent.appendChild(envelopeXML);


    var envelopeModalFooter = document.createElement("footer");
    envelopeModalFooter.className = "modal-footer";

    var closeButton = document.createElement("button");
    closeButton.className = "modalCloseButton";
    closeButton.textContent = "Close";

    envelopeModalFooter.appendChild(closeButton);

    envelopeModal.appendChild(envelopeModalDialog);
    envelopeModalDialog.appendChild(envelopeModalHeader);
    envelopeModalDialog.appendChild(envelopeModalContent);
    envelopeModalDialog.appendChild(envelopeModalFooter);


    var overLay = document.createElement("div");
    overLay.id = "overlay";

    document.body.appendChild(overLay);
    document.body.appendChild(envelopeModal);



    const openEls = document.querySelectorAll("[data-open]");
    const isVisible = "is-visible";

    // for (const el of openEls) {
    //     el.addEventListener("click", function () {
    //         const modalId = this.dataset.open;
    //         document.getElementById(modalId).classList.add(isVisible);
    //     });
    // }

    document.getElementById("envelopeModal").classList.add(isVisible);
    document.getElementById("overlay").style.display = "block";


    closeButton.onclick = function (event) {
        console.log(event);
        document.getElementById("overlay").remove();
        document.getElementById("envelopeModal").remove();

    }
}

export default CustomForm
