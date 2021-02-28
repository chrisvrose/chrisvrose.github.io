import type { AppProps /*, AppContext */ } from 'next/app';
import Header from '../components/Header';
import "../styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header title='hello world'></Header>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
