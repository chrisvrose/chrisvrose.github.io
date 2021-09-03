import { FC, useEffect, useState } from 'react';
import styles from '../styles/NameHeader.module.scss';

export type NameHeaderProps = {
    name: string;
    alias: string[];
    resume: string;
};

/**
 * Big name with switching alias
 * @param param0 Big Name props
 */
const NameHeader: FC<NameHeaderProps> = function NameHeader({ name, alias, resume }) {
    const [canSwitch, setCanSwitch] = useState(false);
    const [currentAliasIndex, setCurrentAliasIndex] = useState(0);
    /** Repeatedly switch between names as long as it is allowed */
    useEffect(() => {
        setTimeout(() => canSwitch && setCurrentAliasIndex((currentAliasIndex + 1) % alias.length), 1000);
    }, [currentAliasIndex, canSwitch, alias.length]);
    return (
        <div className={styles.header}>
            <h1 className={styles.name}>
                Hi, I&apos;m{' '}
                <a className={styles.nameHighlight} href={resume}>
                    {name}
                </a>
                !
            </h1>
            <h6 className={styles.alias}>
                aka{' '}
                <span
                    className={styles.nameHighlight}
                    onMouseOver={() => setCanSwitch(true)}
                    onMouseOut={() => setCanSwitch(false)}
                >
                    {alias[currentAliasIndex]}
                </span>
            </h6>
        </div>
    );
};

export default NameHeader;
