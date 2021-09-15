import React, { FC } from 'react';
import styles from '../styles/index.module.scss';
import { GetStaticProps } from 'next';
import { readMatter, matterType } from '../lib/readPage';
import { ContentProps } from '../lib/misc';
import NameHeader from '../components/NameHeader';
import StringToDivs from '../components/StringToDivs';
import { Languages } from '../components/Languages';

export type HomeContentProps = ContentProps<matterType>;

// FIXME finalize design
const Home: FC<HomeContentProps> = function Home({ content }) {
    return (
        <div className={`container ${styles.para}`}>
            <NameHeader {...content} />
            <p className={styles.desc}>{content.desc}</p>
            <p className={styles.desc}>{content.descLine2}</p>

            {/* <br /> */}
            <Languages languages={content.languages} />

            <br />
            <StringToDivs content={content.miscTech[0].content.map(e => e.name)} />
            <br />
            <StringToDivs content={content.miscTech[1].content.map(e => e.name)} />

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
