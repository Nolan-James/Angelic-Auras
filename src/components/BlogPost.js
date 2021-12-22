import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = ({ title, date, excerpt, slug, image }) => {
    const postImage = getImage(image);
    return (
        <article className='mt-6 p-5 post'>
            <div className='card-image'>
                <GatsbyImage image={postImage} alt=""/>
            </div>
            <h2 className='title post-title'><Link to={slug}>{title}</Link></h2>
            <h3 className='heading '>{date}</h3>
            <p className='post-excerpt'>{excerpt}</p>
        </article>
    );
};

export default BlogPost;