import React from 'react';
import styles from './BlogPost.module.css';
import { Link } from "gatsby";

const BlogPost = ({ title, date, excerpt, slug }) => {
    return (
        <article className='mt-6 p-5'>
            <h2 className='title post-title'><Link to={slug}>{title}</Link></h2>
            <h3 className='heading '>{date}</h3>
            <p className='post-excerpt'>{excerpt}</p>
        </article>
    );
};

export default BlogPost;