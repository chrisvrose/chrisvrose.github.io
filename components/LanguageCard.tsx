import { FC } from 'react';
import { Card } from 'react-bootstrap';

export type languageCardTypes = {
    name: string;
    icon: string;
    smalldesc: string;
};

export const LanguageCard: FC<languageCardTypes> = ({ name, icon, smalldesc }) => {
    return (
        <Card bg='dark' text='light'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{smalldesc}</Card.Text>
            </Card.Body>
        </Card>
    );
};
