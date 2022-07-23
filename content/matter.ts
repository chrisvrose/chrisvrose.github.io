import type { SocialLink } from '../lib/misc';
import { marked } from 'marked';

/**
 * Social links
 */
const links: SocialLink[] = [
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
        link: 'https://www.linkedin.com/in/atreya-bain-162100193/',
    },
    {
        name: 'Email',
        icon: ['fas', 'envelope'],
        link: 'mailto:atreyabain@gmail.com',
    },
];

/** Timings for switcheroo */
export const timingConfig = Object.freeze({
    aliases: 2500,
});

/** Description as a text (Markdown) */
const descriptionText = `
I'm a 4th year CSE undergrad student from R.V. College of Engineering, Bangalore, India.

I like to explore computer science technologies, but most of my work has been on web technologies, and formal languages.

Check out my most recent work on [HSQL](https://hsql.kekvrose.me)!
`;
/** Description parsed into */
const desc = marked(descriptionText);

/** Exported content */
export const matter = {
    name: 'Atreya Bain',
    aliases: ['atreyabain', 'chrisvrose', 'kekvrose'],
    nameLink: 'https://github.com/chrisvrose',
    desc,
    links,
};
