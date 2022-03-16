import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import './style.scss';
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import Reviews from "../components/Reviews";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <title>Angelic Auras - Home</title>
            </Helmet>
            <BackgroundImage className="hero" fluid={heroImage.childImageSharp.fluid}>
                <h1>{tagline}</h1>
                <h2>{subTagline}</h2>
            </BackgroundImage>
            <div className='m-3'>
                <Services/>
            </div>
            <div className='m-6'>
                <Welcome/>
            </div>
            <div className='m-3'>
                <BlogList/>
            </div>
            <div className='m-6'>
                <Reviews/>
            </div>
        </Layout>
    )
}

export default IndexPage
