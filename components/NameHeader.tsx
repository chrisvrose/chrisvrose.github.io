import type { FC } from 'react';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { timingConfig } from '../content/matter';
import styles from '../styles/NameHeader.module.scss';

/**
 * Name heading props, just the basic information
 */
export type NameHeaderProps = {
    name: string;
    aliases: string[];
    nameLink: string;
};

/**
 * Big name with switching alias
 * @param param0 Big Name props
 */
const NameHeader: FC<NameHeaderProps> = function NameHeader({ name, aliases, nameLink }) {
    const [canSwitch, setCanSwitch] = useState(true);
    const [currentAliasIndex, setCurrentAliasIndex] = useState(0);

    // Repeatedly switch between names as long as it is allowed (not hovered on)
    useEffect(() => {
        setTimeout(
            () => canSwitch && setCurrentAliasIndex((currentAliasIndex + 1) % aliases.length),
            timingConfig.aliases
        );
    }, [currentAliasIndex, canSwitch, aliases.length]);

    return (
        <div className={styles.header}>
            <h1 className={styles.name}>
                Hi, I&apos;m{' '}
                <a className={styles.nameHighlight} href={nameLink}>
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
        </div>
    );
};

export default NameHeader;
