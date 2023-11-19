import Link from 'next/link';
import React from 'react';

export default function Proficient() {
    const licenses = [
        {
            title: 'Natural Language Processing Specialization',
            institute: 'Coursera',
            logo: 'assets/img/coursera_logo.jpeg',
            logoAlt: 'Coursera',
            issueDate: 'Sept 2020',
            description: '',
            skills: ['Python', 'Deep Learning', 'Natural Language Processing', 'Machine Learning'],
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/DD9GULMLHSMH'
        },
        {
            title: 'Deep Learning Specialization',
            institute: 'Coursera',
            logo: 'assets/img/coursera_logo.jpeg',
            logoAlt: 'Coursera',
            issueDate: 'Jun 2020',
            description: '',
            skills: ['Python', 'Deep Learning','Data Science', 'Neural Network', 'Machine Learning'],
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/SC5QUAKQQPWF'
        },
        {
            title: 'Image Data Augmentation with Keras',
            institute: 'Coursera',
            logo: 'assets/img/coursera_logo.jpeg',
            logoAlt: 'Coursera',
            issueDate: 'Jun 2020',
            description: '',
            skills: ['Python', 'Keras', 'CNN'],
            link: 'https://www.coursera.org/account/accomplishments/certificate/MGLY35RTCPMJ'
        },
        {
            title: 'Facial Expression Recognition with Keras',
            institute: 'Coursera',
            logo: 'assets/img/coursera_logo.jpeg',
            logoAlt: 'Coursera',
            issueDate: 'Jun 2019',
            description: '',
            skills: ['Python', 'Keras', 'CNN'],
            link: 'https://www.coursera.org/account/accomplishments/certificate/PVQLCTQNQHC8'
        },
        {
            title: 'SQL for data science',
            institute: 'UC Davis',
            logo: 'assets/img/coursera_logo.jpeg',
            logoAlt: 'Coursera',
            issueDate: 'May 2020',
            description: '',
            skills: ['SQL'],
            link: 'https://www.coursera.org/account/accomplishments/certificate/NSDAKGQRLB8G'
        },
    ];

    return (
        <>
            <div className="container">
                <div className="section-heading">
                    <h3 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        <span>LICENSES & CERTIFICATIONS</span>
                    </h3>
                </div>
                <div className="row gy-4">
                    {licenses.map((license, index) => (
                        <div key={index} className="col-sm-6 col-lg-4">
                            <Link href={license.link} target="_blank">
                                <div className="feature-box-01 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50">
                                    <div className="icon">
                                        <img src={license.logo} alt={license.logoAlt} />
                                    </div>
                                    <div className="feature-content">
                                        <h5>{license.title}</h5>
                                        <p className="font-thin">
                                            {license.institute}, {license.issueDate}
                                        </p>
                                        {license?.description && <p>{license.description}</p>}
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {license.skills.map((skill, index) => (
                                            <span key={index} className="!text-black-700 underline underline-offset-4">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
