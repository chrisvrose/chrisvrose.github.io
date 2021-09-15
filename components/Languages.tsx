import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/Languages.module.scss';
import TextTransition, { presets } from 'react-text-transition';

export type languageCardTypes = {
    name: string;
};

export type LanguagesProps = {
    languages: string[];
};

/**
 * @param param0
 * @returns
 */
export const Languages: FC<LanguagesProps> = ({ languages }) => {
    const [canSwitch, setCanSwitch] = useState(true);
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => canSwitch && setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length), 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLanguageIndex, canSwitch]);
    return (
        <>
            <Row className={styles.header}>
                <Col>
                    <h6 onMouseOver={() => setCanSwitch(false)} onMouseOut={() => setCanSwitch(true)}>
                        As of recent, I feel comfortable in working with&nbsp;
                        <TextTransition inline springConfig={presets.gentle} text={languages[currentLanguageIndex]} />!
                    </h6>
                </Col>
            </Row>
            <Row className={styles.header}></Row>
        </>
    );
};
