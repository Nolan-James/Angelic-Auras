import React from 'react';
import Card from "./Card";
import { graphql, Link, useStaticQuery } from "gatsby";

const Services = () => {
    const data = useStaticQuery(graphql`
      {
        markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
          frontmatter {
            service1Title
            service1Description
            service1Image {
                childImageSharp {
                    gatsbyImageData(width: 1280, placeholder: BLURRED, formats: AUTO)
                }
            }
            service2Title
            service2Description
            service2Image {
                childImageSharp {
                    gatsbyImageData(width: 1280, placeholder: BLURRED, formats: AUTO)
                }
            }
            service3Title
            service3Description
            service3Image {
                childImageSharp {
                    gatsbyImageData(width: 1280, placeholder: BLURRED, formats: AUTO)
                }
            }
          }
        }
      }
    `);


    const service1Title = data.markdownRemark.frontmatter.service1Title;
    const service1Description = data.markdownRemark.frontmatter.service1Description;
    const service1Image = data.markdownRemark.frontmatter.service1Image;

    const service2Title = data.markdownRemark.frontmatter.service2Title;
    const service2Description = data.markdownRemark.frontmatter.service2Description;
    const service2Image = data.markdownRemark.frontmatter.service2Image;

    const service3Title = data.markdownRemark.frontmatter.service3Title;
    const service3Description = data.markdownRemark.frontmatter.service3Description;
    const service3Image = data.markdownRemark.frontmatter.service3Image;

    return (
        <div className='container'>
            <div className='columns'>
                <div className='column'>
                    <Link to='/energy'>
                        <Card title={service1Title} description={service1Description} img={service1Image}/>
                    </Link>
                </div>
                <div className="column">
                    <Link to='/meditation'>
                        <Card title={service2Title} description={service2Description} img={service2Image}/>
                    </Link>
                </div>
                <div className="column">
                    <Link to='/guidance'>
                        <Card title={service3Title} description={service3Description} img={service3Image}/>

                    </Link>
                </div>
            </div>
        </div>
    )
        ;
};


export default Services;