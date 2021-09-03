import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LanguageCard, languageCardTypes } from './LanguageCard';

export type LanguagesProps = {
    languages: languageCardTypes[];
};

export const Languages: FC<LanguagesProps> = ({ languages }) => {
    return (
        <Row>
            {languages.map(e => {
                return (
                    <Col>
                        <LanguageCard key={e.name} {...e} />
                    </Col>
                );
            })}
        </Row>
    );
};
