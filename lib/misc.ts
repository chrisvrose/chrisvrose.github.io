/**
 * Stringify then parsify, makes processing large files easier and removes functions
 * @param arg Input object
 * @returns Simplified object
 */
export function parsify<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
}
