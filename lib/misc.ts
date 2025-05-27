import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/**
 * Social Link
 */
export type SocialLink = { name: string; icon: [IconPrefix, IconName]; link: string };

/**
 * Generic interface for representing an object wrapped into content key
 * @param T content object
 */
export interface ContentProps<T> {
    content: T;
}
