import { FC } from 'react';


/**
 * Placeholder component to convert an array of strings into divs
 * @deprecated
 * @param param0 
 */
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
