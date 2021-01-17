import Head from 'next/head';
import { FC } from 'react';
import styles from '../styles/index.module.css';
const Home: FC = function Home() {
    return (
        <div className='container'>
            <p className={styles.para}>Hello world!</p>
        </div>
    );
};

export default Home;
