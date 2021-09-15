import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/**
 * Stringify then parsify, makes processing large files easier and removes functions
 * @typeparam T Object in question
 * @param arg Input object
 * @returns Simplified object
 */
export function parsify<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
}

/**
 * Social Link
 */
export type SocialLink = { name: string; icon: [IconPrefix, IconName]; link: string };

/**
 * Generic type to get result of a promise
 * @param T Promised object
 */
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

/**
 * Generic interface for representing an object wrapped into content key
 * @param T content object
 */
export interface ContentProps<T> {
    content: T;
}
