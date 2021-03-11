import { FC } from 'react';

export type LanguagesProps = {
    languages: {
        name: string;
        icon: string;
    }[];
};

export const Languages: FC<LanguagesProps> = ({ languages }) => {
    return (
        <div>
            {languages.map(e => {
                return e.name;
            })}
        </div>
    );
};
