import React from 'react';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const EnergyPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Energy Field Healing</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1'>Energy Field Healing</h1>
                    </div>
                </div>
            </header>

            <section id="energy-section" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='subtitle is-2'>Restore Balance</h2>
                            <p>Jenny is an Advanced Level Energy Field Therapist.</p>

                            <p>Energy Field Healing is a highly advanced specialist therapy that works to restore
                                balance to the
                                body’s
                                energy
                                field, also known as the aura. Energy Field Healing is an active healing and will
                                stimulate &amp;
                                re-energise
                                the body’s own ability to heal itself.</p>

                            <p>The aim of the therapy is to remove unwanted negative energy, imbalances and blockages
                                that may be
                                causing
                                some
                                form of ill health, this then aids the body to return to it’s true state of
                                balance &amp; well
                                being.</p>

                            <h2 className='subtitle is-2'>The Human Energy Field</h2>
                            <p>Our energy field radiates all around us (3-4 feet). It is made up of a complex system of
                                life patterns
                                and
                                memories,
                                which drive our view, beliefs, attitudes and physical presence in the world.</p>

                            <p>Because our energy field is in constant flow it absorbs energies from people and places
                                that we have an
                                energy
                                connection with, in fact everyone we know and the places we work and live in.</p>

                            <p>It is possible to feel emotions and trauma long after an event has happened because the
                                energy
                                connection
                                remains intact.
                                So if it was a stressful experience then the effects of that would be non-serving and
                                may cause fatigue
                                and
                                an emotionally drained feeling.
                                This can build heavily in the energy field and if left uncleared may lead to physical
                                illness, emotional
                                and mental imbalance.</p>

                            <p>As an Energy Field Healer my aim would be to clear these stagnant energies, release any
                                blockages and
                                non
                                serving energies, which will then allow fresh universal
                                energy to flow back in. This strengthens the whole being physical, mental, emotional and
                                spiritual
                                allowing
                                you to take control of your life
                                and bring yourself harmony and balance. Feeling whole again.</p>

                            <p>I work on the central channel of the body which has energy centres (Chakras). I aim to
                                balance the
                                body’s
                                main energy centres and re-align
                                and re-energise the energy field, thus bringing a sense of well being, peace, happiness
                                and joy.</p>


                        </div>
                        <div className="energy-results">
                            <div className="has-text-centered p-4 ">
                                <h4 className='mb-2'>Clinc results have shown Energy Field Healing to be effective with
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
                            <h4 className="warning-text">Please note: Due to the movement of energy this treatment is
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