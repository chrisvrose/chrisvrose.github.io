import { AppBar, Tab, Tabs } from '@material-ui/core';
import Head from 'next/head';
import React, { FC, useEffect } from 'react';

export interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = function Header({ title }) {
    const [value, setValue] = React.useState<'1' | '2' | '3'>('1');
    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AppBar position='static'>
                <Tabs
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    aria-label='simple tabs example'
                >
                    <Tab label='Item One' value='1' />
                    <Tab label='Item Two' value='2' />
                    <Tab label='Item Three' value='3' />
                </Tabs>
            </AppBar>
        </>
    );
};

export default Header;
