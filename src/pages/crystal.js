import React from 'react';
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Crystal = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Crystal Chakra & Violet fire Cleansing</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1 mt-6'>Crystal Chakra & Violet fire Cleansing</h1>
                    </div>
                </div>
            </header>

            <section id="light-section" className="p-5">
                <div className='container'>
                    <div className='row text-center'>
                        <p className='mb-4'>
                            Spend an hour in pure relaxation with a crystal chakra and violet fire cleansing session.
                        </p>
                        <p className='mb-4'>
                            Be still and enjoy some quiet time from the outside world whilst you receive the healing
                            energies of crystals on each of your main chakra points.
                            Feeling uplifted, relaxed and renewed.
                        </p>
                        <p className='mb-4'>
                            £45 per session
                        </p>
                        <p className='mb-4'>
                            Based in Birmingham with easy access from Junction 7 of the M6 & the M5.
                        </p>
                        <p className='mb-4'>
                            Email:
                            <a href="mailto: angelicauras@mail.co.uk">angelicauras@mail.co.uk</a>
                        </p>
                        <div className='has-text-centered'>
                            <StaticImage className='is-centered mb-4' src='../images/crystal.png' alt='crystals'/>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Crystal;