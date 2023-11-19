import React from 'react';

import SocialLinks from '../socials';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="footer-avatar">
                        <img src="assets/img/me.png" alt="Bibishan Pandey" />
                    </div>
                    <h6>Have something on your mind? Let&apos;s team up.</h6>
                </div>
                <SocialLinks />
                <p className="copyright">&copy; 2023, copyright all right reserved.</p>
            </div>
        </div>
    );
}
