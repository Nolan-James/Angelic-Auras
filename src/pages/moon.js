import React from 'react';
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const Moon = () => {
    return (
        <Layout>
            <Helmet>
                <title>Angelic Auras - Moon Magic</title>
            </Helmet>
            <header id="page-header">
                <div className="container has-text-centered">
                    <div className=" m-auto text-center">
                        <h1 className='title is-1'>Moon Magic</h1>
                    </div>
                </div>
            </header>

            <section id="light-section" className="py-3">
                <div className='container m-4'>
                    <p className='mb-4'>
                        As the moon goes through it’s cycles , so does our emotional world. The moon's phases are a
                        reflection of the circle of life, but if you take time out of your day and tune into its divine
                        frequency you may too embark on a spiritual journey of enlightenment using the extra power of
                        both
                        the new and full moon energies to release, cleanse, purify and enhance your own light.
                    </p>
                    <p className='mb-4'>
                        You can use these wonderful energies to help manifest a wish list and to also let go and release
                        from unwanted old worn out belief systems and negative unwanted energy. Or just spend some time
                        outside admiring it’s beauty and radiance.
                    </p>
                    <p className='mb-4'>
                        On a new moon a good technique is to write down your dreams and desires with a loving intent.
                        Then
                        release those wishes and desires in the light of the moon by setting fire to the paper and
                        releasing
                        it in faith and hope that your wishes will be granted in perfect divine timing serving the
                        highest
                        of all.
                    </p>
                    <p className='mb-4'>
                        On a full moon you can also help manifest your true hearts desires by doing this simple ritual.
                        It
                        is also a good time to release and let go of unwanted energies and anything holding you back.
                        You
                        can write this down and set fire to the list in the light of the full moon. Go with what feels
                        right
                        for you there are no rules as long as it’s for the highest of all and in divine timing, that way
                        you
                        are invoking the highest light and intention for all.
                    </p>
                    <p className='mb-4'>
                        The full moons light is a great time to cleanse and charge your crystal collection. It is best
                        outside either on the earth or on a table, if you can’t do that then on a window sill is also
                        good
                        where the moon light is shining in, equally the bright sunshine is also a great way to cleanse
                        and
                        charge your crystals with new radiant energy. Notice the difference in how they look and feel
                        before
                        and after.
                    </p>
                </div>
            </section>

        </Layout>
    );
};

export default Moon;