import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Reviews = () => {
    return (
        <Carousel showIndicators={false} autoPlay={true} interval={10000} infiniteLoop={true} showThumbs={false}
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
            <div key='slide4'>

                Review: I have been attending Jen's womens circle and can honestly say it is such a wonderful and
                uplifting experience. Jen is really such a positive energy and person to be around and no matter what
                mood you are in when you arrive you always leave feeling uplifted and relaxed. The steps and stages are
                explained really well and we are all given enough time individually to learn and understand our own
                journey and path within the experience. I really enjoy my time in the circle with jen and the other
                ladies. Thank you for all you do

                Would recommend: Yes

                Maxine – Wolverhampton
            </div>
            <div key='slide5'>
                Review: Invited to join one of the Light Within Women's Circles. Been to a couple of meetings now and I
                am absolutely loving it. Jen is so dedicated and passionate about what she's teaching us. Also meeting
                like-minded people and forming new friendships. Can't wait for next meeting!!

                Would recommend: Yes

                Katarina - Wolverhampton
            </div>
            <div key='slide6'>
                The Light Within Circle is truly a beautiful experience. I personally didnt know what to expect from
                this monthly meeting of lovely women. We literally sit together in a circle with a radiance that is both
                mysterious and calming. Jen talks us through our meditation, which I found hard at first, but she has
                awakened something in me, that I knew was there, but blocked it out all these years. She has helped me
                find my light within. There are. tears, feelings of joy and much laughter at this wonderful circle.
                Jen's Angelic readings are spot on. I'm actually in awe. I highly recommend it. Yvonne - Walsall
            </div>
        </Carousel>
    );
};

export default Reviews;