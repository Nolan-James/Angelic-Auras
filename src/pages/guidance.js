import React from 'react';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"

const GuidancePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Spiritual Guidance Healing</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1'>Spiritual Guidance Healing</h1>
                    </div>
                </div>
            </header>

            <section id="guidance-intro" className="p-5">
                <div className="container">
                    <div className="row text-center">

                        <p className='mb-4'>Spiritual Guidance Healing is similar to a talking therapy but with the
                            unique added benefit
                            of healing
                            too.
                            Some therapies stir up the emotions which allow some release but still the same issue can
                            reappear later
                            on because it is not quite resolved,
                            this is because emotional energy, grief, unhappiness etc and other intense emotions once
                            stirred up will
                            float around or lay dormant in the energy
                            field until they are cleared out and transformed. Unresolved issues, non serving energy and
                            toxic patterns
                            are repeated time after time
                            if the original cause of the matter has not been addressed and healed.</p>

                        <p className='mb-4'>
                            This unique course will teach you how to care for and enhance your spiritual health and
                            wellbeing with a new set of skills for your toolbox to safely embark on your spiritual
                            journey and manage your life.
                        </p>
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
                            You will need to bring with you a pendulum which can be bought from Amazon either rose
                            quartz or clear quartz whichever you resonate with more. You may bring your own deck of
                            angel cards (not tarot cards).
                        </p>
                        <p className='mb-4'>
                            Our Earth is calling us to re-connect to nature and tap into our own divine inner light to
                            rise up and be who we truly are.
                        </p>
                        <p className='mb-4'>
                            Especially organised the day before the magical full flower moon to release the old and
                            renew.
                        </p>
                        <p className='mb-4'>
                            As the moon goes through it’s cycles , so does our emotional world. The moon's phases are a
                            reflection of the circle of life, but if you take time out of your day and tune into its
                            divine frequency you may too embark on a spiritual journey of enlightenment using the extra
                            magical power of the Flower Moon to release, cleanse, purify and enhance your own light.
                        </p>
                        <p className='mb-4'>
                            A lifetime investment for only £55
                            Please reserve your space by emailing <a
                            href="mailto: angelicauras@mail.co.uk"
                            className='button is-link'>angelicauras@mail.co.uk</a> for more information and
                            details on how to enrol.
                        </p>

                    </div>
                    <p className='mb-4'>We will work through areas that arise during the session, my aim will be to
                        transform, clear
                        and
                        re-balance your energy whilst offering intuitive guidance.</p>

                    <div>
                        <h2 className='title is-2 has-text-centered'>Spend an hour in pure relaxation with a crystal
                            chakra session.</h2>
                        <div className='has-text-centered'>
                            <StaticImage className='is-centered mb-4' src='../images/crystal.png' alt='crystals'/>
                        </div>
                        <p className='mb-4'>
                            Be still and enjoy some quiet time from the outside world whilst you receive the healing
                            energies of crystals on each of your main chakra
                            points. Feeling uplifted, relaxed and renewed.
                        </p>
                        <p className='mb-4'>
                            £35 per session
                        </p>
                        <p className='mb-4'>
                            Based in Birmingham with easy access from Junction 7 of the M6 & the M5.
                        </p>
                        <div>
                            <a href="mailto: angelicauras@mail.co.uk" className='button is-link'>Send Email</a>

                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GuidancePage;