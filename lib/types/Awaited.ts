/**
 * Generic type to get result of a promise
 */
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
