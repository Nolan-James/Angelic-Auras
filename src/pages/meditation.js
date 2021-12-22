import React from 'react';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Meditation = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Meditation</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1'>Meditation</h1>
                    </div>
                </div>
            </header>

            <section id="meditation-intro" className="pt-3">
                <div className="container">

                    <p>A daily practise of meditation has been proven to enhance your well being. In recent studies
                        it was shown
                        to make positive changes to our brain structure and was found to be effective in helping to
                        reduce
                        anxiety, stress and depression. </p>
                    <p>The benefits are huge:</p>
                </div>
            </section>

            <section id="meditation-section" className="py-3">
                <div className="container meditation">

                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Lowers heart
                                rate and blood
                                pressure
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Controls
                                anxiety
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Helps you to
                                sleep better
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Helps you to
                                stay grounded
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Helps you to
                                make better
                                choices
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Offers
                                clarity
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Increases
                                positive emotions
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Help accept
                                the things you
                                cannot change
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Reduces and
                                overcomes stress
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Brings
                                peacefulness and calm
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Brings
                                strength and stability
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Helps you
                                feel happier and
                                more joyful
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Helps you to
                                manifest your
                                dreams
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Helps you to
                                heal yourself
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>Better
                                concentration
                            </li>
                            <li className="list-group-item"><i className="fas fa-heart fa-fw mr-5"></i>spiritual
                                enlightenment
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="meditation-body" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Whatever your reasons for wanting to learn to meditate well, it will be beneficial to the
                                whole of you
                                mentally, emotionally and physically.
                                Practise makes perfect and meditation is a journey of enlightenment and well-being that
                                everyone should
                                consider taking part in to enhance their lives.</p>
                            <ul>
                                <li>Ground your energy</li>
                                <li>Meditate</li>
                                <li>Protect your energy</li>
                            </ul>
                            <p>For more information or to book an appointment email: <a
                                href="mailto:jen@angelic.com">jen@angelic.com</a></p>
                            <p className="warning-text">Note: please seek advice from your doctor before coming off any
                                medication and
                                inform
                                him
                                that you have
                                taken up a practise of daily meditation and you would like your health condition
                                monitored with respect
                                to that and in the hope that you will eventually be able to reduce or even stop your
                                medication.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Meditation;