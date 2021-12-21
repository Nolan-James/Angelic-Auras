import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Welcome = () => {
    const data = useStaticQuery(graphql`
    {
        markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
            frontmatter {
                welcomeTitle
                WelcomeText
            }
        }
    }
`)

    const welcomeTitle = data.markdownRemark.frontmatter.welcomeTitle;
    const welcomeText = data.markdownRemark.frontmatter.WelcomeText;

    return (
        <div className='container mt-5'>
            <h1>{welcomeTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: welcomeText }}/>
        </div>
    );
};


export default Welcome;