import './globals.css';
import '../../public/assets/css/style.css';
import '../../public/assets/colors/color-3.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nabin Pakka',
    description: 'React.js Developer | Next.js Developer | JavaScript Developer | Software Developer'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/* metas */}
            <meta charSet="utf-8" />
            <meta name="author" content="Nabin Pakka" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="keywords" content="Nabin Pakka" />
            <meta name="description" content="React.js Developer | Next.js Developer | JavaScript Developer | Software Developer" />
            {/*title*/}
            <title>Nabin Pakka</title>
            {/* Favicon */}
            <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
            <body className={`${inter.className} min-h-screen`}>{children}</body>
        </html>
    );
}
