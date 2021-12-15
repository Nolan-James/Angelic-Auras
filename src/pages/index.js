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
    }
  `)
    return (
        <Layout>
            <div>
                <h1>{data.site.siteMetadata.title}</h1>
            </div>
            <BlogList/>
        </Layout>
    )
}

export default IndexPage
