import type { AppProps } from 'next/app';
import Header from '../components/Header';

import '../styles/global.scss';
/**
 * Wrapper app component
 * @param param0 Base components and page props
 * @returns Wrapped component
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header title='Hello!'></Header>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
