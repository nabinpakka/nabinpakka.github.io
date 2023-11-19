import Link from 'next/link';

export default function SocialLinks() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            link: 'https://github.com/nabinpakka'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/nabin-pakka/'
        },
        {
            name: 'Email',
            icon: 'fas fa-envelope',
            link: 'mailto:paknans89@gmail.com'
        },
        {
            name: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            link: 'https://wa.me/+13375574572'
        },
        {
            name: 'Phone',
            icon: 'fas fa-phone',
            link: 'tel:+13375574572'
        },
        // {
        //     name: 'Twitter',
        //     icon: 'fab fa-twitter',
        //     link: 'https://twitter.com/bibishan_pandey'
        // }
    ];

    return (
        <ul className="nav social-link">
            {socialLinks.map((socialLink) => (
                <li key={socialLink.name}>
                    <Link href={socialLink.link} passHref>
                        <i className={socialLink.icon} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
