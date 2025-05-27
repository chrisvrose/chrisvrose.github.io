import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import type { SocialLink } from '../lib/misc';
import styles from '../styles/footer.module.scss';

export type FooterProps = {
    links: SocialLink[];
};
export const Footer: FC<FooterProps> = function ({ links }) {
    return (
        <footer className={styles.footer}>
            {links.map((e) => {
                return (
                    <span key={e.name}>
                        <a href={e.link} title={e.name} className={styles.footerIcon}>
                            <FontAwesomeIcon icon={e.icon} />
                        </a>
                    </span>
                );
            })}
        </footer>
    );
};
