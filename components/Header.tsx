import { AppBar, Tab, Tabs } from '@material-ui/core';
import Head from 'next/head';
import React, { FC, useEffect } from 'react';

export interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = function Header({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
        </>
    );
};

export default Header;
