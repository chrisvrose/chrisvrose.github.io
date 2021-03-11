import React from 'react';
import { FC } from 'react';
import styles from '../styles/NameHeader.module.scss';

export type NameHeaderProps = {
    name: string;
    alias: string[];
    resume: string;
};

/**
 * Big name
 * @param param0 Big Name props
 */
const NameHeader: FC<NameHeaderProps> = function NameHeader({ name, alias, resume }) {
    const [canSwitch, setCanSwitch] = React.useState(false);
    const [currentAliasIndex, setCurrentAliasIndex] = React.useState(0);
    /** Repeatedly switch between names  */
    React.useEffect(() => {
        setTimeout(() => canSwitch && setCurrentAliasIndex((currentAliasIndex + 1) % alias.length), 1000);
    }, [currentAliasIndex, canSwitch]);
    return (
        <div className={styles.header}>
            <h1 className={styles.name}>
                Hi, I'm{' '}
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
