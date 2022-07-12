import React from "react"
import Layout from "../components/Layout"
//import * as styles from "../styles/home.module.css"

function About() {
  return (
    <Layout>
      <div className="header">
        <h2>About me </h2>
        <p>My name is Jillian Eccles, i currently live in morrinsville.</p>
        <p>I love to play board games ,video games and read in my free time.</p>

        <h2>History</h2>
        <ul>
          <li>
            BSc majoring in Computer Science - University of Waikato - 2019
          </li>
          <li>
            Adminstrator - Referral centre at Waikato Hospital - 2016 - Current
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default About
