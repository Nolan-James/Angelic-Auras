import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styles from './index.module.css';
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import './style.scss';
import Services from "../components/Services";
import Welcome from "../components/Welcome";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
        frontmatter {
          tagline
          subTagline
          heroImage {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
    }
  `);
    const tagline = data.markdownRemark.frontmatter.tagline;
    const subTagline = data.markdownRemark.frontmatter.subTagline;
    const heroImage = data.markdownRemark.frontmatter.heroImage;

    return (
        <Layout>
            <BackgroundImage className="hero" fluid={heroImage.childImageSharp.fluid}>
                <h1 className='hero-txt'>{tagline}</h1>
                <h2>{subTagline}</h2>
            </BackgroundImage>
            <Services/>
            <Welcome/>
            <BlogList/>
        </Layout>
    )
}

export default IndexPage
