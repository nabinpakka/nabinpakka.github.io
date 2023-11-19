'use client';

import AboutMe from '@app/components/aboutme';
import Banner from '@app/components/banner';
import Contact from '@app/components/contact';
import Layout from '@app/components/layout/_layout';
import Portfolio from '@app/components/portfolio';
import Proficient from '@app/components/proficient';

export default function Home() {
    return (
        <Layout>
            <section id="home" data-scroll-index={0} className="section home-section">
                <Banner />
            </section>
            <section id="about" data-scroll-index={1} className="section about-section gray-bg-1">
                <AboutMe />
            </section>
            <section id="portfolio" data-scroll-index={3} className="section portfolio-section bg-white">
                <Portfolio />
            </section>
            <section id="services" data-scroll-index={2} className="section services-section">
                <Proficient />
            </section>
        </Layout>
    );
}
