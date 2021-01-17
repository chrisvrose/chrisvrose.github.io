import Head from 'next/head';
import React, { FC } from 'react';
import styles from '../styles/index.module.css';
import { GetStaticProps } from 'next';
import readPage from '../lib/readPage';
import NameHeader from '../components/NameHeader';
import matterIndexMatter from '../lib/types/matterIndexMatter';
import StringToDivs from '../components/StringToDivs';
interface HomeProps extends matterIndexMatter {}

const Home: FC<HomeProps> = function Home({ data, content }) {
    return (
        <div className={`container ${styles.para}`}>
            <NameHeader name={data.name} />
            <p>{content}</p>

            <br />
            <StringToDivs data={data.languages} />
            <br />
            <StringToDivs data={data.dbs} />
            <br />
            <StringToDivs data={data.tech} />

            <br />
            {data.links.map((e, i) => {
                return (
                    <div key={i}>
                        <a href={e.link}>{e.name}</a>
                    </div>
                );
            })}
        </div>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async context => {
    const { data, content } = await readPage('index', 'matter');
    return {
        props: {
            data,
            content,
        } as HomeProps,
    };
};

export default Home;
