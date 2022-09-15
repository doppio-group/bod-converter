import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className='footer-left'>
                    <div className='zoom'>
                        <a href="https://github.com/ajayyadukrishnan/bod-converter/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug+Report"
                            className="feature-link" target="_blank">
                            <i className="fa fa-comment fa-lg fa-exclamation" aria-hidden="true"></i>
                            &nbsp;<span className="footer-feature">Raise an Issue</span>
                        </a>
                    </div>
                </div>

                <div className='footer-center'>
                    <div className='zoom'>
                        <a href="https://github.com/ajayyadukrishnan" className="footer-link" target="_blank">
                            <i className="fa fa-github fa-2x githubIcon" aria-hidden="true"></i>
                            &nbsp;<span className="footer-author">Ajay Yadukrishnan</span>
                        </a>

                    </div>
                </div>


                <div className='footer-right'>
                    <div className='zoom'>
                        <a href="https://github.com/ajayyadukrishnan/bod-converter/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Feature+Request"
                            className="feature-link" target="_blank">
                            <i className="fa fa-comment fa-lg commentIcon" aria-hidden="true"></i>
                            &nbsp;<span className="footer-feature">Suggest a new feature</span>
                        </a>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='zoom'>
                        <a href="https://github.com/ajayyadukrishnan/bod-converter" className="footer-link" target="_blank">
                            <i className="fa fa-code-fork fa-lg forkIcon" aria-hidden="true"></i>
                            &nbsp;<span className="footer-fork">Fork Me!</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;