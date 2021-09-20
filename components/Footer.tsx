import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import { SocialLink } from '../lib/misc';
import styles from '../styles/footer.module.scss';

export type FooterProps = {
    links: SocialLink[];
};
export const Footer: FC<FooterProps> = function ({ links }) {
    return (
        <footer className={styles.footer}>
            {links.map((e, i) => {
                return (
                    <span key={i}>
                        <a href={e.link} title={e.name} className={styles.footerIcon}>
                            <FontAwesomeIcon icon={e.icon} />
                        </a>
                    </span>
                );
            })}
        </footer>
    );
};
