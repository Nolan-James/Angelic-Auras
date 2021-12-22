import React from 'react';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

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

            <section id="guidance-intro" className="pt-3">
                <div className="container">
                    <div className="row text-center">

                        <p>Spiritual Guidance Healing is similar to a talking therapy but with the unique added benefit
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

                    </div>
                    <p>We will work through areas that arise during the session, my aim will be to transform, clear
                        and
                        rebalance your energy whilst offering intuitive guidance.</p>
                </div>
            </section>
        </Layout>
    );
};

export default GuidancePage;