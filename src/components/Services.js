import React from 'react';
import Card from "./Card";
import { graphql, useStaticQuery } from "gatsby";

const Services = () => {
    //   const data = useStaticQuery(graphql`
    //   {
    //     markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
    //       frontmatter {
    //         service1Title
    //         service1Description
    //         service1Image {
    //           childImageSharp {
    //               fluid(quality: 90, maxWidth: 1200) {
    //                   ...GatsbyImageSharpFluid
    //               }
    //           }
    //         }
    //         service2Title
    //         service2Description
    //         service2Image {
    //           childImageSharp {
    //               fluid(quality: 90, maxWidth: 1200) {
    //                   ...GatsbyImageSharpFluid
    //               }
    //           }
    //         }
    //         service3Title
    //         service3Description
    //         service3Image {
    //           childImageSharp {
    //               fluid(quality: 90, maxWidth: 1200) {
    //                   ...GatsbyImageSharpFluid
    //               }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `);
    const service1Title = data.markdownRemark.frontmatter.service1Title;
    const service1Description = data.markdownRemark.frontmatter.service1Description;
    const service1Image = data.markdownRemark.frontmatter.service1Image;

    const service2Title = data.markdownRemark.frontmatter.service1Title;
    const service2Description = data.markdownRemark.frontmatter.service1Description;
    const service2Image = data.markdownRemark.frontmatter.service1Image;

    const service3Title = data.markdownRemark.frontmatter.service1Title;
    const service3Description = data.markdownRemark.frontmatter.service1Description;
    const service3Image = data.markdownRemark.frontmatter.service1Image;

    return (
        <div>
            <Card title={service1Title} description={service1Description} img={service1Image}/>
            <Card title={service2Title} description={service2Description} img={service2Image}/>
            <Card title={service3Title} description={service3Description} img={service3Image}/>
        </div>
    );
};

export default Services;