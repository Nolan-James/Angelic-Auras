import React from 'react';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"

const GuidancePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Spiritual Health and Well-being</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1 mt-6'>Spiritual Health and Well-being</h1>
                    </div>
                </div>
            </header>

            <section id="guidance-intro" className="p-5">
                <div className="container">
                    <div className="row text-center">

                        <p className='mb-4'>This unique course will teach you how to care for and enhance your spiritual
                            health and wellbeing with a new set of skills for your toolbox to safely embark on your
                            spiritual journey and manage your life.</p>

                        <p className='mb-4'>
                            Taught by Jen of Angelic Auras. She is the facilitator of The Light Within Women's Circle,
                            an advanced level Energy Field Healer, (15 years) Meditation teacher and offers Spiritual
                            Guidance and other healing therapies. Jen is from an ancestral line of natural healers and
                            psychic's.
                        </p>
                        <p className='mb-4'>
                            You will learn the essential basics of:
                        </p>
                        <p className='mb-4'>
                            Part 1
                            *Psychic attack & how to recognise it
                            *Energy Protection/Angelic protection
                            *Energy clearing
                            *Colour Therapy/Breathing
                            *Grounding
                        </p>
                        <p className='mb-4'>
                            Part 2
                            *Using Crystals
                            *Using a pendulum
                            *Angel Card Readings
                            *Working with Angels
                        </p>
                        <p className='mb-4'>
                            With practical sessions on the day to help you feel and connect.
                        </p>
                        <p className='mb-4'>
                            We will end the day with a peaceful relaxing meditation.
                        </p>
                        <p className='mb-4'>
                            You will need to bring with you a crystal pendulum either rose quartz or clear quartz
                            whichever you resonate with more. You may bring your own deck of angel cards (not tarot
                            cards).
                        </p>
                        <p className='mb-4'>
                            Our Earth is calling us to re-connect to nature and tap into our own divine inner light to
                            rise up and be who we truly are.
                        </p>
                        <p className='mb-4'>
                            A lifetime investment for only £65
                        </p>
                        <p className='mb-4'>
                            Please reserve your space by emailing <a
                            href="mailto: angelicauras@mail.co.uk"
                            className='button is-link'>angelicauras@mail.co.uk</a> for more information and
                            details on how to enrol.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GuidancePage;