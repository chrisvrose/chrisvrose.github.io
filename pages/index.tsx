import Head from 'next/head';
import { FC } from 'react';
import styles from '../styles/index.module.css';
import { GetStaticProps } from 'next';
import readPage from '../lib/readPage';
import NameHeader from '../components/NameHeader';
interface HomeProps {
    name: string;
    content: string;
    links: { name: string; link: string }[];
}
const Home: FC<HomeProps> = function Home({ name, content, links }) {
    return (
        <div className={`container ${styles.para}`}>
            <NameHeader name={name} />
            <p>{content}</p>
            {links.map((e, i) => {
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
            name: data.name,
            content,
            links: data.links,
        },
    };
};

export default Home;
