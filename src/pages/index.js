import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import styles from './index.module.css';
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } })
      {
        frontmatter {
            tagline
            heroImage
        }
      }
    }
  `)
    const tagline = data.markdownRemark.frontmatter.tagline;
    const heroImage = data.markdownRemark.frontmatter.heroImage;
    return (
        <Layout>
            <div style={{ backgroundImage: `url('${heroImage})` }}>
                <h1>{tagline}</h1>
            </div>
            <BlogList/>
        </Layout>
    )
}

export default IndexPage
