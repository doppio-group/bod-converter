import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import CustomForm from "../components/customForm"
import { NightMode } from "../components/nightMode"


const IndexPage = () => (

    <Layout>
        <Seo title="Home" />
        <div className={styles.textCenter}>
            <div>
                <div className="nigthModeSwitchDiv">
                    <NightMode />
                </div>
            </div>
            <h1>
                <b>BOD Converter</b>
            </h1>
        </div>
        <CustomForm />
    </Layout>
)



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="BOD Converter" />

export default IndexPage
