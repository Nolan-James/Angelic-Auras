import React from 'react';
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const Light = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - “The Light Within” – Women’s Circle</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1'>“The Light Within” – Women’s Circle</h1>
                    </div>
                </div>
            </header>

            <section id="light-section" className="py-3">
                <div className='container m-4'>
                    <p className='mb-4'>
                        A unique and empowering women’s circle helping you connect to the "Light Within".
                    </p>
                    <p className='mb-4'>
                        A spiritual meeting between souls to learn to connect or re-connect to Source and awaken and
                        shine
                        your true inner light.

                        By learning to re-connect to the "Light Within" you will feel at peace, find strength, joy, a
                        knowing that all will be well, a re-connection to who you truly are through your heart centre to
                        the
                        Divine Inner Light Within You/ Source/God Light/Christ Light.
                    </p>
                    <p className='mb-4'>
                        You will learn how to tap into your own personal spiritual network that know you so well, love
                        you
                        and are waiting to assist you on your personal spiritual journey here on this beautiful earth we
                        share on your own unique destiny path.
                    </p>
                    <p className='mb-4'>
                        <span className='has-text-weight-bold'>You are not alone.</span>
                    </p>
                    <p className='mb-4'>
                        Please view our WEBSITE which will share details of monthly meetings and other events that may
                        be of
                        interest to you.
                    </p>
                    <p className='mb-4'>
                        We each are born with the skills we need to walk our true destiny path and have a spiritual team
                        who
                        know us so well that are just waiting to be asked to support and guide us on our journey on
                        Earth.
                        All we have to do is awaken the light within and make the true connection.
                    </p>
                    <p className='mb-4'>
                        Our monthly meeting will held in a sacred space embraced in higher divine light.
                    </p>
                    <p className='mb-4'>
                        £15 per month
                    </p>
                </div>
            </section>

        </Layout>
    );
};

export default Light;