import type { SocialLink } from '../lib/misc';
import { marked } from 'marked';

/** Description as a text (Markdown) */
const descriptionText = `
I'm a software engineer currently studying Software Systems Engineering at University College London.

I like to explore computer science technologies, but most of my work has been on web technologies, distributed systems, and (formal) languages.

But that hasn't stopped me from trying new things (say, [a whole emulator](https://log.kekvrose.me/2025/01/25/bytepusher-a-gentle-shove-into-emulating/), or a [Minecraft Server Manager](https://github.com/chrisvrose/mcdisco)!)
`;

/**
 * Social links
 */
const socialLinks: SocialLink[] = [
    {
        name: 'Blog',
        icon: ['fas', 'rss-square'],
        link: 'https://log.kekvrose.me',
    },
    {
        name: 'Github',
        icon: ['fab', 'github'],
        link: 'https://github.com/chrisvrose',
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
const descriptionTextParsed = marked(descriptionText, { async: false });

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
