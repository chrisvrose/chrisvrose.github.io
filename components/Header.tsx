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
            <link rel='shortcut icon' href='https://secure.gravatar.com/avatar/1f56e31aa75edc98a8b9bc08431c8214?s=16' />
            <meta name='description' content='Landing page for kekvrose.me' />
        </Head>
    );
};

export default Header;
