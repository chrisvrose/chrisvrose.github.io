import path from 'path';
import matter from 'gray-matter';
import { promises as fs } from 'fs';
import { Awaited } from './types/Awaited';
/**
 * Read Blog file
 * @param blogname read blog file
 */
export async function readBlogPage(blogname: string) {
    const paths = path.join(process.cwd(), 'content', 'blog', path.basename(blogname) + '.md');
    //read file
    const file = await fs.readFile(paths);
    //process it
    return matter(file);
}

function parsify<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
}

/**
 * Shape of matter.json
 */
export type matterType = Awaited<ReturnType<typeof readMatter>>;
/**
 * Read front matter and present it
 */
export async function readMatter() {
    return parsify(await import('../content/matter.json'));
}

/**
 * Shape of projects
 */
export type projectsType = Awaited<ReturnType<typeof readProjects>>;
/**
 * Read projects and return as JSON
 */
export async function readProjects() {
    return parsify(await import('../content/projects.json'));
}
