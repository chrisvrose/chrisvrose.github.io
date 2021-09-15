import styles from '../styles/404.module.scss';
import Link from 'next/link';

export default function Page404() {
    return (
        <div className={styles.container}>
            <div className={styles.highlight}>
                <Link href='/'>404</Link>&nbsp;
            </div>
            | Not found
        </div>
    );
}
