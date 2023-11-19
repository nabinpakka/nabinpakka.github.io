import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from '@app/components/footer';
import Header from '@app/components/header';

interface ILayoutProps {
    children: React.ReactNode | React.ReactNode[];
    style?: any;
}

export default function Layout({ children, style }: ILayoutProps) {
    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-bs-theme', style);
    }, []);

    return (
        <>
            <Header />
            <main className="wrapper">{children}</main>
            <Footer />
        </>
    );
}
