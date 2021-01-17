import { FC } from 'react';

const StringToDivs: FC<{ data: string[] }> = function StringToDivs({ data }) {
    return (
        <>
            {data.map((e, i) => (
                <div key={i}>{e}</div>
            ))}
        </>
    );
};
export default StringToDivs;
