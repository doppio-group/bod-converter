import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { render } from 'react-dom'

import * as Styles from "../components/customForm.css"
import Footer from './footer'
import Loading from './loading'

function CustomForm() {

    return (
        <div className='container'>
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
    )
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
