import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = ({ title, img, description }) => {
    const image = getImage(img);
    return (
        <div className="card mt-3 p-3">
            <div className="card-image is-rounded">
                <GatsbyImage image={image} alt='title'/>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default Card;