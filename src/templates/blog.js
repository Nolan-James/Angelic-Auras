import React from 'react';
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const BlogTemplate = ({ data }) => {
    const heroImage = data.markdownRemark.frontmatter.postImage;

    return (
        <Layout>
            <BackgroundImage className="hero-post" fluid={heroImage.childImageSharp.fluid}>
                <h1 className='hero-txt'>{data.markdownRemark.frontmatter.title}</h1>
            </BackgroundImage>

            <section className='articles'>
                <div className='column is-8 is-offset-2'>
                    <div className="card article">
                        <div className='card-content'>
                            <div className="media">
                                <div className="media-content has-text-centered">
                                    <p className='title article-title'>
                                        {data.markdownRemark.frontmatter.title}
                                    </p>
                                    <div className='tags has-addons level-item'>
                                        <span className='tag is-rounded is-info'>@angelic</span>
                                        <span className='tag is-rounded'>{data.markdownRemark.frontmatter.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='content article-body'>
                                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
                            </div>
                        </div>
                    </div>
                    <div className='heading'>
                        <Link to="/blog">All Posts...</Link>
                    </div>
                </div>


            </section>
        </Layout>
    );
};

export const query = graphql`
query($slug: String!)
    {
        markdownRemark(fields:{slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                postImage {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                 }
            }
        }
    }
`;

export default BlogTemplate;