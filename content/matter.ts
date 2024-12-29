import type { SocialLink } from '../lib/misc';
import { marked } from 'marked';


/** Description as a text (Markdown) */
const descriptionText = `
I'm a software engineer currently studying Software Systems Engineering at University College London.

I like to explore computer science technologies, but most of my work has been on distributed systems, web technologies, and formal languages.

I like to documented my work in a blog [here](https://log.kekvrose.me)!

`;

/**
 * Social links
 */
const socialLinks: SocialLink[] = [
    {
        name: 'Github',
        icon: ['fab', 'github'],
        link: 'https://github.com/chrisvrose',
    },
    {
        name: 'Gitlab',
        icon: ['fab', 'gitlab'],
        link: 'https://gitlab.com/chrisvrose',
    },
    {
        name: 'Linkedin',
        icon: ['fab', 'linkedin'],
        link: 'https://www.linkedin.com/in/atreyabn/',
    },
    {
        name: 'Email',
        icon: ['fas', 'envelope'],
        link: 'mailto:atreyabain@gmail.com',
    },
];

/** Parsed Description */
const descriptionTextParsed = marked(descriptionText);

/** Exported content */
export const matter = {
    name: 'Atreya Bain',
    aliases: ['atreyabain', 'atreyabn', 'chrisvrose', 'kekvrose'],
    nameLink: 'https://github.com/chrisvrose',
    desc: descriptionTextParsed,
    links: socialLinks,
};

/** Timings for switcheroo */
export const timingConfig = Object.freeze({
    aliases: 2500,
});
