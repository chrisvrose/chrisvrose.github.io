import React, { FC } from 'react';
import styles from '../styles/index.module.scss';
import { GetStaticProps } from 'next';
import {readMatter,matterType} from '../lib/readPage';
import ContentProps from '../lib/types/ContentProps'
import NameHeader from '../components/NameHeader';
import StringToDivs from '../components/StringToDivs';

export type HomeContentProps = ContentProps<matterType>;

// FIXME
const Home: FC<HomeContentProps> = function Home({content:data}) {
    
    return (
        <div className={`container ${styles.para}`}>
            <NameHeader name={data.name} />
            <p>{data.desc}</p>

            <br />
            <StringToDivs data={data.languages.map(e=>e.name)} />
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

export const getStaticProps: GetStaticProps<HomeContentProps> = async context => {
    const content = await readMatter();
    return {
        props: {
            content,
        },
    };
};

export default Home;
