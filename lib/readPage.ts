import path from 'path';
import matter from 'gray-matter';
import { promises as fs } from 'fs';

export type matterType = 'matter' | 'langs' | 'projects' | 'blogs';

/**
 * Read a file
 * @param fileid File name
 * @param topic Topic matter (folder name)
 */
export default async function readPage(fileid: string, topic: matterType) {
    const paths = path.join(process.cwd(), 'content', topic, path.basename(fileid) + '.md');
    //read file
    const file = await fs.readFile(paths);
    //process it
    return matter(file);
}
