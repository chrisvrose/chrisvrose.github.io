import Head from 'next/head';
import type { FC } from 'react';

export interface HeaderProps {
    title: string;
}

/**
 * Modify header title
 * @param param0
 */
const Header: FC<HeaderProps> = function Header({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel='shortcut icon' href='/icon/16.png' />
            <meta name='description' content='Landing page for kekvrose.me' />
            <link rel='manifest' href='/manifest.json' />
            <meta name='theme-color' content='#bc7100' />
            <link rel='apple-touch-icon' sizes='192x192' href='/icon/192.png' />
        </Head>
    );
};

export default Header;
