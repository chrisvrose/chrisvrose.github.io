import { FC } from 'react';
import { Card } from 'react-bootstrap';

/**
 * An item as part of the technologies
 */
export type contentItem = {
    name: string;
    proficiency: number;
};

/**
 * Technologies
 */
export type TechnologiesProps = {
    type: string;
    name: string;
    content: contentItem[];
};

/**
 * A generic tech block
 * @param props
 * @returns
 */
export const Technologies: FC<TechnologiesProps> = function Technologies({ content, name, type }) {
    // ;

    return (
        <Card>
            <Card.Body>{name}</Card.Body>
        </Card>
    );
};
