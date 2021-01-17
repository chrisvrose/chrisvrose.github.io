import Head from 'next/head';
import { FC } from 'react';
import styles from '../styles/index.module.css';
import { GetStaticProps } from 'next';
import readPage from '../lib/readPage';
interface HomeProps {
    name: string;
    content: string;
}
const Home: FC<HomeProps> = function Home({ name, content }) {
    return (
        <div className='container'>
            <p className={styles.para}>Hello {name}!</p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async context => {
    const {
        metadata: { name },
        content,
    } = await readPage('index', 'matter');
    return {
        props: {
            name,
            content,
        },
    };
};

export default Home;
