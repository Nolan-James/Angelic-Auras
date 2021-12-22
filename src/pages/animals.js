import React from 'react';
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

const AnimalsPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Angels for Animals</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1'>Angels For Animals</h1>
                    </div>
                </div>
            </header>

            <section>
                <div className="container">
                    <div className="column">
                        <p>Jenny has been campaigning for animal rights since 2015 and attends and organises events
                            advocating a
                            vegan lifestyle and bringing awareness to the current climate emergency. She also
                            advocates against
                            trophy hunting and poaching of iconic wildlife species and offers advise on how we can
                            all help to
                            reduce our carbon footprint to help the planet breathe again! </p>

                        <h4 className="text-center">Please visit our <Link to="/news">NEWS</Link> page for further
                            information, upcoming events and how you can get involved.</h4>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default AnimalsPage;