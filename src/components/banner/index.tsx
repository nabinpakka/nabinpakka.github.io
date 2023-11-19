import React from 'react';
import { TypeWriter } from '@app/plugin/type-writer';
import BannerProfile from './profile';
import SocialLinks from '../socials';

export default function Banner() {
    return (
        <>
            <div className="ef-1" />
            <div className="ef-2" />
            <div className="container">
                <div className="row align-items-center min-vh-100 flex-row-reverse">
                    <BannerProfile />
                    <div className="col-lg-6">
                        <div className="home-intro">
                            <h6>👋 Hi, I&apos; m</h6>
                            <h1 className="bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">Nabin Pakka</h1>

                            <h2 className="bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
                                I&apos;m a <TypeWriter />
                            </h2>
                            <p className="pe-lg-5">Nice to meet you. Please take a look around!</p>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
