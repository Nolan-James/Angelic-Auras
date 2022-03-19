import React from 'react';
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - About Us</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1 mt-6'>About Us</h1>
                    </div>
                </div>
            </header>

            <section id="about-section" className="py-3">
                <div className='container m-4 mx-auto'>
                    <div>
                        <div className='has-text-centered'>
                            <StaticImage className='is-centered mb-4' src='../images/room.jpeg' alt='crystals'
                                         width={400} height={600} placeholder="blurred" layout='constrained'/>
                        </div>
                        <p className='mb-4'>
                            Coming from an ancestral line of healers and psychics on my Irish Celtic side, as a young
                            child
                            I have always been gifted with intuition and a sense of wisdom & knowing. Growing up I
                            received
                            guidance which like most I sometimes tended to ignore much to my despair, but I learnt
                            pretty
                            quickly soon after a near death experience to learn to listen and trust the guidance I was
                            receiving.
                        </p>
                        <div className='columns m-6'>
                            <StaticImage className='is-centered mb-4 is-three-quarters' src='../images/jen.jpg'
                                         alt='crystals'
                                         width={100} height={150} placeholder="blurred" layout='constrained'/>
                            <p className='mb-4 column '>
                                My journey as a healer began many years ago when an Angel saved my life from certain
                                death,
                                this
                                then lead me on a quest to find out as much information as I could about Angels and
                                Spirit.
                                Inevitably this then lead me to the caring healing side and I qualified as a Reiki
                                practitioner.
                            </p>

                        </div>
                        <p className='mb-4'>
                            During Reiki sessions with clients I soon came to realize that I needed to learn more about
                            the
                            human energy field. During healing sessions I could feel random energy floating around the
                            client and wanted to learn more. I was introduced to an advanced form of energy healing
                            which
                            worked with the whole of you. I had a session myself first which improved my health in all
                            areas
                            mentally, emotionally, spiritually and physically so I enrolled on this unique diploma
                        </p>
                        <p className='mb-4'>
                            I have been qualified as an Advanced Level Energy Field Healer (dip.EFH) for over 15 years..
                        </p>
                        <p className='mb-4'>
                            Based in Birmingham, within easy reach just off Junction 7 of M6 & M5 near Great Barr,
                            Walsall, Sutton Coldfield and surrounding areas.
                        </p>
                        <p className='mb-4'>
                            I also run a monthly Women’s Circle called “The Light Within” for more details, dates and
                            events
                            you can view the <a href="https://lightwithin74.wixsite.com/website" target="_blank"
                                                rel="noreferrer"><span
                            className='has-text-weight-bold button is-link'>WEBSITE</span></a> join the
                            face
                            book group <a href="https://www.facebook.com/groups/thelightwithinu/" target="_blank"
                                          rel="noreferrer"><span className='has-text-weight-bold button is-link'>LIGHT WITHIN</span></a> or
                            on
                            Instagram
                            <a href="https://www.instagram.com/angelicaurashealing/" target="_blank"
                               rel="noreferrer"><span className='has-text-weight-bold button is-link ml-1'>ANGELIC AURAS HEALING</span></a>
                        </p>

                        <p className='mb-4'>
                            I have a keen interest in animal welfare and environmental issues. I regularly attend and
                            organise events to bring awareness about those issues by not only promoting a vegan diet to
                            help
                            save the planet and it’s animal kingdoms but by also campaigning against trophy hunting and
                            the
                            impact this barbaric so called sport has on endangered wildlife now under the threat of
                            extinction. Please visit my sister page angels-for-animals for more information, upcoming
                            events
                            and how you can get involved.
                        </p>
                        <div>
                            <h2 className='title is-2 has-text-centered'>Transform Your Energy ~ To Transform Your
                                Life</h2>
                            <p className='mb-4'>
                                Discounts are offered to students and the unemployed. So please do contact me personally
                                to
                                discuss any questions you may have and to book an appointment <a
                                href="mailto: angelicauras@mail.co.uk"
                                className='button is-link'>angelicauras@mail.co.uk</a> or
                                for
                                our Women’s Circle - <a href="mailto: lightwithin@mail.co.uk"
                                                        className='button is-link'>lightwithin@mail.co.uk</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default About;