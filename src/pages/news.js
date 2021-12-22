import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const NewsPage = () => {
    const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { contentKey: { eq: "newsPage" } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);

    const title = data.markdownRemark.frontmatter.title;
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - News</title>
            </Helmet>
            <section className="section has-text-centered">
                <h1 className="title">{title}</h1>
                <div className='is-size-5' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
            </section>
        </Layout>
    );
};

export default NewsPage;