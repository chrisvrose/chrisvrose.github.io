import type { AppProps /*, AppContext */ } from 'next/app';
import Header from '../components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
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
