import React from 'react';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const EnergyPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Energy Healing</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className="m-auto text-center">
                        <h1 className='title is-1 mt-6'>Energy Healing</h1>
                    </div>
                </div>
            </header>

            <section id="energy-section" className="py-3">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='subtitle is-2'>Restore Balance</h2>
                            <p>Jenny is an Advanced Level Energy Therapist. She gained her advanced diploma in 2007, but
                                has always had an interest in the healing arts since her childhood from crystal balls,
                                Angel card readings, crystals to Reiki and meditation. She is a natural intuitive and
                                her intentions are always for the highest serving purpose of the client.</p>

                            <p>Energy Healing works to restore balance to the body’s energy field, also known as the
                                Aura. The session will activate, stimulate & re-energise the body’s own ability to heal
                                itself.</p>

                            <p>The aim of the therapy is to remove unwanted negative energy, imbalances and blockages by
                                cleansing and re-aligning the Chakra system and Aura layers around the body.</p>

                            <h2 className='subtitle is-2 mt-4'>The Human Aura</h2>
                            <p>Our Aura radiates all around us (3-4 feet) It is in constant flow and will absorb
                                energies from everyone we have a connection with including the places we work and live
                                in. This may answer many of your questions on why you feel so drained or different after
                                being in a certain place or with certain people.</p>

                            <p>As an Energy Healer my aim would be to clear these stagnant and dense energies, release
                                any blockages and non serving energies, which will then allow fresh universal energy to
                                flow back in. This strengthens the whole being physical, mental, emotional and
                                spiritual.</p>

                            <p>I work on the central channel of the body which has energy centres (Chakras). I aim to
                                balance the body’s main energy centres and re-align and re-energise the Aura, thus
                                bringing a sense of well being, peace, happiness and joy.</p>

                        </div>
                        <div className="energy-results">
                            <div className="has-text-centered p-4 ">
                                <h4 className='mb-2'>Clinic results have shown Energy Healing to be effective with
                                    conditions
                                    including:</h4>
                                <div className="container">
                                    <div className="columns">
                                        <ul className="panel-list column">
                                            <li className="level-item">Relationship Issues</li>
                                            <li className="level-item">Low Self-Esteem</li>
                                            <li className="level-item">Confidence Issues</li>
                                            <li className="level-item">Low Energy</li>
                                            <li className="level-item">Exam Stress</li>
                                            <li className="level-item">Joint Pain</li>
                                        </ul>

                                        <ul className="panel-list column">
                                            <li className="level-item">Feeling out of sorts &amp; down</li>
                                            <li className="level-item">Grief and a sense of loss</li>
                                            <li className="level-item">Stress &amp; Anxiety</li>
                                            <li className="level-item">Emotional burn-out</li>
                                            <li className="level-item">Fatigue</li>
                                            <li className="level-item">&amp; so much more</li>
                                        </ul>
                                    </div>

                                </div>
                                <p className='mb-4'>We will work through areas that arise during the session, my aim
                                    will be to
                                    transform, clear
                                    and
                                    re-balance your energy whilst offering intuitive guidance.</p>
                                <p className='mb-4'>
                                    £65 per session
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="list" className="bg-light py-5">
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row">
                        <div className="col-lg-6">

                        </div>

                        <div className="col-lg-6">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center py-3 text-white">
                            <h4 className="warning-text has-text-centered">Please note: Due to the movement of energy
                                this treatment is
                                NOT suitable for people with epilepsy,
                                pregnant women and people with pacemakers.</h4>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default EnergyPage;