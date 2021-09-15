import React, { FC } from 'react';
import styles from '../styles/index.module.scss';
import { GetStaticProps } from 'next';
// import { readMatter, matterType } from '../lib/readPage';
import { ContentProps } from '../lib/misc';
import NameHeader from '../components/NameHeader';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Footer } from '../components/Footer';
import { matter } from '../content/matter';

export type HomeContentProps = ContentProps<typeof matter>;

config.autoAddCss = false;
library.add(faGithub, faEnvelope, faLinkedin, faGlobe, faGitlab);
// FIXME finalize design
const Home: FC<HomeContentProps> = function Home({ content }) {
    return (
        <>
            <div className={`container ${styles.para}`}>
                <NameHeader {...content} />
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: content.desc }}></div>
                {/* <p className={styles.desc}>{content.descLine2}</p> */}

                {/* <Languages languages={content.languages} /> */}
                <br />
            </div>
            <Footer links={content.links} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const content = matter;

    return {
        props: {
            content,
        },
    };
};

export default Home;