import { FC } from 'react';
import styles from '../styles/NameHeader.module.css';

const NameHeader: FC<{ name: string }> = function NameHeader({ name }) {
    return <h1 className={styles.name}>Hi, I'm {name}!</h1>;
};

export default NameHeader;
