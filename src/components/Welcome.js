import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Welcome = () => {
    const data = useStaticQuery(graphql`
    {
        markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
        html
            frontmatter {
               welcomeTitle 
            }
        }
    }
`)

    const welcomeTitle = data.markdownRemark.frontmatter.welcomeTitle
    return (
        <div className='container mt-5 '>
            <h1 className='title is-1'>{welcomeTitle}</h1>
            <div className='is-size-5' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        </div>
    );
};


export default Welcome;