import Head from 'next/head';
import { FC } from 'react';

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
            <link rel='shortcut icon' href='/icon/16.jpeg' />
            <meta name='description' content='Landing page for kekvrose.me' />
            <link rel='manifest' href='/static/manifest.json' />
        </Head>
    );
};

export default Header;
