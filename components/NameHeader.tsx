import { FC, useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styles from '../styles/NameHeader.module.scss';

/**
 * Name heading props, just the basic information
 */
export type NameHeaderProps = {
    name: string;
    aliases: string[];
    resume: string;
};

/**
 * Big name with switching alias
 * @param param0 Big Name props
 */
const NameHeader: FC<NameHeaderProps> = function NameHeader({ name, aliases, resume }) {
    const [canSwitch, setCanSwitch] = useState(true);
    const [currentAliasIndex, setCurrentAliasIndex] = useState(0);
    /** Repeatedly switch between names as long as it is allowed */
    useEffect(() => {
        setTimeout(() => canSwitch && setCurrentAliasIndex((currentAliasIndex + 1) % aliases.length), 2000);
    }, [currentAliasIndex, canSwitch, aliases.length]);
    return (
        <div className={styles.header}>
            <h1 className={styles.name}>
                Hi, I&apos;m{' '}
                <a className={styles.nameHighlight} href={resume}>
                    {name}
                </a>
                !
            </h1>
            <h6 className={styles.alias} onMouseOver={() => setCanSwitch(false)} onMouseOut={() => setCanSwitch(true)}>
                aka{' '}
                <TextTransition
                    className={styles.nameHighlight}
                    text={aliases[currentAliasIndex]}
                    springConfig={presets.wobbly}
                    inline
                />
            </h6>
            <h6>As of recent, I feel comfortable in working with {}</h6>
        </div>
    );
};

export default NameHeader;
