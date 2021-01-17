import remark from 'remark';
import html from 'remark-html';
import path from 'path';
import matter from 'gray-matter';
import { promises as fs } from 'fs';

export type matterType = 'matter' | 'langs' | 'projects' | 'blogs';

/**
 *
 * @param fileid File name
 * @param topic Topic matter (folder name)
 */
export default async function readPage(fileid: string, topic: matterType) {
    const paths = path.join(process.cwd(), 'content', topic, path.basename(fileid) + '.md');
    //read file
    const file = await fs.readFile(paths);
    //process it
    const mr = matter(file);

    //convert to html
    const matterResult = await remark().use(html).process(mr.content);

    return {
        metadata: mr.data,
        content: matterResult.toString(),
    };
}
