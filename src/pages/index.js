import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Jillian Eccles</h2>
          {/* <h3>Female Ginger</h3> */}
          <p>A Web Developer based in Morrinsville, New Zealand</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <GatsbyImage image={image} alt="sloth" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "sleepingSloth.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
