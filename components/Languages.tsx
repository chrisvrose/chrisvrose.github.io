import React, { FC } from 'react';
import { CardDeck } from 'react-bootstrap';
import { LanguageCard, languageCardTypes } from './LanguageCard';

export type LanguagesProps = {
    languages: languageCardTypes[];
};

export const Languages: FC<LanguagesProps> = ({ languages }) => {
    return (
        <CardDeck>
            {languages.map(e => {
                return <LanguageCard key={e.name} {...e} />;
            })}
        </CardDeck>
    );
};
