import type { FC } from 'react';
import type { GetStaticProps } from 'next';
import type { ContentProps } from '../lib/misc';
import NameHeader from '../components/NameHeader';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/index.module.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Footer } from '../components/Footer';
import { matter } from '../content/matter';

/**
 * Content props - will be the content read up put into the 'content' key
 */
export type HomeContentProps = ContentProps<typeof matter>;

// fontawesome config - add the characters
config.autoAddCss = false;
library.add(faGithub, faEnvelope, faLinkedin, faGlobe, faGitlab);

/**
 * (Landing) page component
 * @param param0 content
 * @returns page component
 */
const Home: FC<HomeContentProps> = function Home({ content }) {
    return (
        <>
            <div className={`container ${styles.para}`}>
                <NameHeader {...content} />
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: content.desc }}></div>
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
