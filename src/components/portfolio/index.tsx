import React, { useState } from 'react';
import Modal from 'react-modal';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';

export default function Portfolio() {
    // For Lightbox
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(event: any, index: any) {
        event.preventDefault();
        event.stopPropagation();
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1 // increment index by 1 to match slide numbering
        });
    }

    const projects = [
        {
            title: 'PREFER',
            subTitle: 'NSF funded Machine Learning research project',
            img: 'assets/img/prefer.png',
            type: 'Research',
            link: 'https://prefer-nsf.org/'
        },
        {
            title: 'Artano',
            subTitle: 'A marketplace for NFT in Cardano Blockchain.',
            img: 'assets/img/artano/1.jpg',
            type: 'Website',
            link: 'https://artano.io'
        },
        {
            title: 'BetterCollected',
            subTitle: 'A secure and robust form builder.',
            img: 'assets/img/bettercollected/1.jpg',
            type: 'Website',
            link: 'https://bettercollected.com'
        },
        {
            title: 'StartMark',
            subTitle: 'A website for investment in new startups.',
            img: 'assets/img/startmark.png',
            type: 'Website',
            link: 'https://www.startmark.de/'
        },
        {
            title: 'Kuber IDE',
            subTitle: 'An IDE for Cardano blockchain.',
            img: 'assets/img/kuber/1.jpg',
            type: 'Website',
            link: 'https://kuberide.com/ide'
        },
        {
            title: 'Blockchain-Wallet',
            subTitle: 'A cross-platform mobile wallet for Ethereum transaction.',
            img: 'assets/img/mobile-wallet.png',
            type: 'Android Application',
            link: 'https://github.com/nabinpakka/Blockchain-Wallet'
        },
        {
            title: 'ChatAppFirebase',
            subTitle: 'A Mobile chat application using firebase.',
            img: 'assets/img/firebaseChat.png',
            type: 'Mobile Application',
            link: 'https://github.com/nabinpakka/ChatAppFirebase'
        }
    ];
    return (
        <>
            <div className="container">
                <div className="section-heading">
                    <h3 className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                        <span>Projects</span>
                    </h3>
                </div>
                <div className="lightbox-gallery">
                    <div className="row g-3 g-lg-4 portfolio-content">
                        {projects.map((data, index) => (
                            <div className="col-sm-6 col-lg-4 grid-item" key={index}>
                                <div className="portfolio-box">
                                    <div className="portfolio-text">
                                        <Link href={data.link} target="_blank" className="[&>*]:hover:!text-blue-500">
                                            <h6 className="">{data.title}</h6>
                                            <p>{data.subTitle}</p>
                                        </Link>

                                        <a onClick={(event) => openLightboxOnSlide(event, index)} className="gallery-link" href={`#project_${index}`}>
                                            <i className="bi-arrow-up-right-circle" />
                                        </a>
                                    </div>
                                    <div className="portfolio-img aspect-video overflow-hidden">
                                        <img src={data.img} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <FsLightbox toggler={lightboxController.toggler} sources={projects.map((data) => data.img)} slide={lightboxController.slide} />
                    </div>
                </div>
            </div>
        </>
    );
}
