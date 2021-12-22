import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Reviews = () => {
    return (
        <Carousel showIndicators={false} autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false}
                  className='container review-carousel'>
            <div key='slide1'>
                To all who love all things spiritual and uplifting, I would love to convey a wonderful experience of
                serenity and uplifting energy when in a session with Jen at the Women's Circle recently, I wish this
                very special group an everlasting joy in what is being achieved for our Earth, the animal Kingdom
                and humankind x Theresa, Edgbaston.
            </div>
            <div key='slide2'>
                "I wasn’t sure what to expect from the Light Within circle, having never done this kind of thing
                before, but as soon as I arrived I could feel the warm and positive energy that Jen had created in
                the space.

                It felt so good to be in this nurturing and respectful environment with like-minded women, and
                throughout the meditations and exercises we were gently but skilfully guided. Although it was all
                new to me, I felt very safe and supported.

                I came away feeling uplifted and validated, and really looking forward to the next session.”
                Jane, Cheshire
            </div>
            <div key='slide3'>
                "Jen creates such a safe and calm atmosphere. From the moment you walk through the door you are able to
                feel the calming energy in the room . She helps you get in tune with your own energy and rhythms. She is
                able to lead the group and guide them but also gives us the tools to be able to meditate outside of the
                circle aswell. I cant wait to delve deeper with her guiding me " Sarah, Walsall
            </div>
        </Carousel>
    );
};

export default Reviews;