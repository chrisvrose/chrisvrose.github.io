import { SocialLink } from '../lib/misc';
import marked from 'marked';
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
        name: 'Email',
        icon: ['fas', 'envelope'],
        link: 'mailto:atreyabain@gmail.com',
    },
];

/** Timings for switcheroo */
export const timingConfig = {
    aliases: 2000,
} as const;

/** Description as a text (Markdown) */
const descriptionText = `
I'm a 3rd year CSE undergrad student from R.V. College of Engineering, Bangalore, India.

I like to explore computer science technologies, but most of my work has been on web technologies, and formal languages.

Check out my most recent work on [HSQL](https://hsql.kekvrose.me)!
`;
/** Description parsed into */
const desc = marked(descriptionText);

/** Exported content */
export const matter = {
    name: 'Atreya Bain',
    aliases: ['atreyabain', 'chrisvrose', 'kekvrose'],
    resume: './static/resume.pdf',
    desc,
    links,
};
