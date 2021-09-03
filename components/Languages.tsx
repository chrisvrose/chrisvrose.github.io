import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LanguageCard, languageCardTypes } from './LanguageCard';
import styles from '../styles/Languages.module.scss';
export type LanguagesProps = {
    languages: languageCardTypes[];
};

export const Languages: FC<LanguagesProps> = ({ languages }) => {
    return (
        <>
            <Row className={styles.header}>
                <Col>
                    <h3>Languages I use</h3>
                </Col>
            </Row>
            <Row>
                {languages.map(e => {
                    return (
                        <Col key={e.name}>
                            <LanguageCard {...e} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};
