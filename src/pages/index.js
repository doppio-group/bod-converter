import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import CustomForm from "../components/customForm"
import { NightMode } from "../components/nightMode"
import "../components/index.css"
import Footer from "../components/footer"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import whiteLogo from '../images/doppio-lockup-white.png'
import blackLogo from '../images/doppio-lockup-black.png'

class IndexPage extends React.Component {

    constructor(props) {
        super(props)


        var defaultDarkMode = false;
        if (typeof window !== "undefined") {
            // Client-side-only code
            defaultDarkMode = window.localStorage.getItem("darkMode");
        }

        defaultDarkMode = defaultDarkMode === null || defaultDarkMode === undefined || defaultDarkMode === "false" ? false : true;
        console.log("Default dark mode: " + defaultDarkMode)
        var tempSource = defaultDarkMode === true ? whiteLogo : blackLogo
        console.log(tempSource)

        this.darkModeHandler = this.darkModeHandler.bind(this)
        this.state = {
            isDarkMode: defaultDarkMode,
            logoSource: tempSource,
            // logoImage: getImage(data.blogPost.avatar)
        }
        console.log(this.state.logoSource)
    }



    setDocumentStyle() {
        if (this.state.isDarkMode == true) {
            document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-light)');
        } else {
            document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');
        }
    }

    componentDidMount() {
        if (this.state.isDarkMode == true) {
            document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-light)');
            this.setState({
                logoSource: whiteLogo
            })
            console.log(this.state.logoSource)
            document.getElementsByClassName("logo")[0].src = whiteLogo
        } else {
            document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');
            this.setState({
                logoSource: blackLogo
            })
            console.log(this.state.logoSource)
            document.getElementsByClassName("logo")[0].src = blackLogo
        }
    }

    darkModeHandler(event) {
        if (event.target.checked) {
            document.documentElement.style.setProperty('--color-background', 'var(--color-dark)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-light)');
            localStorage.setItem("darkMode", "true");
            this.setState({
                isDarkMode: true,
                logoSource: whiteLogo
            })
            console.log(this.state.logoSource)
            document.getElementsByClassName("logo")[0].src = whiteLogo
            // console.log("Setting state to true");

        } else {
            document.documentElement.style.setProperty('--color-background', 'var(--color-light)');
            document.documentElement.style.setProperty('--color-text', 'var(--color-dark)');
            localStorage.setItem("darkMode", "false");
            this.setState({
                isDarkMode: false,
                logoSource: blackLogo
            })
            console.log(this.state.logoSource)
            document.getElementsByClassName("logo")[0].src = blackLogo
            // console.log("Setting state to false");
        }

    }

    render() {

        return (
            <Layout>
                <Seo title="Home" />
                <div className={styles.textCenter}>
                    <div>
                        <div className="nigthModeSwitchDiv">
                            <NightMode isDarkMode={this.state.isDarkMode} darkModeHandler={this.darkModeHandler} />
                        </div>
                    </div>
                    <div className="pageTitleDiv">
                        <div className='doppioLogo'>
                            <img
                                className='logo'
                                src={this.state.logoSource}
                                // width={175}
                                alt={"Doppio Group"}
                                quality="100"
                            />
                            {/* <StaticImage
                                className='logo'
                                src={this.state.logoSource}
                                width={175}
                                alt={"Doppio Group"}
                                quality="100"
                            /> */}
                            {/* <GatsbyImage image={ } /> */}
                            {this.state.isDarkMode === true ? console.log("dark") : console.log("light")}
                            {/* <StaticImage
                                className='logo'
                                src={this.props.isDarkMode === true ? "../images/dopio-lockup-black.png" : "../images/dopio-lockup-white.png"}
                                width={175}
                                alt={"Doppio Group"}
                                quality="100".
                            /> */}
                        </div>
                        <h1 className="pageTitle">
                            <b>BOD Converter</b>
                        </h1>
                    </div>
                </div>
                <CustomForm isDarkMode={this.state.isDarkMode} />
                {/* <Footer /> */}
            </Layout >
        )


    }

}


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="BOD Converter" />

export default IndexPage
