import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import BlogPost from "./BlogPost";

const BlogList = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { contentKey: { eq: "blog" }}}
        limit: 3
        ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
                slug
            }
            excerpt
          }
        }
      }
    }
  `);
    return (
        <div className='container mt-5'>
            <div className="columns post is-4">
                {data.allMarkdownRemark.edges.map(edge => (
                    <BlogPost key={edge.node.id}
                              slug={edge.node.fields.slug}
                              title={edge.node.frontmatter.title}
                              date={edge.node.frontmatter.date}
                              excerpt={edge.node.excerpt}

                    />
                ))}
            </div>

            <div>
                <Link to="/blog">More --</Link>
            </div>

        </div>
    );
};

export default BlogList;