import React, { FC } from 'react';
import styles from '../styles/index.module.scss';
import { GetStaticProps } from 'next';
import { readMatter, matterType } from '../lib/readPage';
import ContentProps from '../lib/types/ContentProps';
import NameHeader from '../components/NameHeader';
import StringToDivs from '../components/StringToDivs';
import { Languages } from '../components/Languages';

export type HomeContentProps = ContentProps<matterType>;

// FIXME
const Home: FC<HomeContentProps> = function Home({ content }) {
    return (
        <div className={`container ${styles.para}`}>
            <NameHeader {...content} />
            <p className={styles.desc}>{content.desc}</p>

            <br />
            <Languages languages={content.languages} />
            {/* <StringToDivs data={content.languages.map(e => e.name)} /> */}
            <br />
            <StringToDivs data={content.dbs} />
            <br />
            <StringToDivs data={content.tech} />

            <br />
            {content.links.map((e, i) => {
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
