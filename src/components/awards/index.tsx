import React, { useState } from 'react';
import Modal from 'react-modal';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';

export default function Awards() {
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

    const awards = [
        {
            title: 'Digital Nepal Conclave 2025',
            subTitle: 'Volunteered as Event Crew',
            img: 'assets/awards/DNC.png',
            type: 'Volunteer',
            link: 'https://digitalconclave.org/'
        },
        {
            title: 'Academic Excellence Awards',
            subTitle: 'Two censecutive awards (2025, 2024) ',
            img: 'assets/awards/Academic.png',
            type: 'Award',
            link: 'https://louisiana.edu/honorsconvocation'
        },
        {
            title: 'Neural Information Processing Systems 2023',
            subTitle: 'Representing University of Louisiana at Lafayette.',
            img: 'assets/awards/NIPs.jpg',
            type: 'Participation',
            link: 'https://neurips.cc/Conferences/2023'
        },
        {
            title: 'Robowars',
            subTitle: "Coordinator of Nepal's first Robowar.",
            img: 'assets/awards/robowars.jpg',
            type: 'Event',
            link: 'https://www.engineeringnepal.com.np/2019/01/JIGYASA-Engineering-Expo-is-being-Organized-in-Thapathali-campus.html'
        },
        {
            title: 'Robotics & Automation Center',
            subTitle: 'Executive member (2017 - 2019)',
            img: 'assets/awards/RAC.jpg',
            type: 'Organization',
            link: 'https://www.facebook.com/racthapathali/about/'
        },
        {
            title: 'Techfest, IIT Bombay',
            subTitle: 'Second runner-up, International Robotics Competition (2018)',
            img: 'assets/awards/techfest.png',
            type: 'Award',
            link: 'https://techfest.org/'
        },
        {
            title: 'Golden Jubilee Scholarship',
            subTitle: 'Scholarship for undergraduates, provided by Government of India based on merit. (2016 - 2020)',
            img: 'assets/awards/Gj.jpg',
            type: 'Award',
            link: 'https://www.indembkathmandu.gov.in/gjss'
        },
        {
            title: 'Mahatma Gandhi Scholarship',
            subTitle: 'Scholarship for highschoolers, provided by Government of India based on merit. (2014 - 2016)',
            img: 'assets/awards/MG.jpg',
            type: 'Award',
            link: 'https://www.indembkathmandu.gov.in/mgss'
        }
    ];
    return (
        <>
            <div className="container">
                <div className="section-heading">
                    <h3 className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                        <span>Awards/Participations</span>
                    </h3>
                </div>
                <div className="lightbox-gallery">
                    <div className="row g-3 g-lg-4 portfolio-content">
                        {awards.map((data, index) => (
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
                        <FsLightbox toggler={lightboxController.toggler} sources={awards.map((data) => data.img)} slide={lightboxController.slide} />
                    </div>
                </div>
            </div>
        </>
    );
}
