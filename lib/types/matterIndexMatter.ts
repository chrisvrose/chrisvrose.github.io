import baseMatterData from './indexMatterData';

export default interface matterIndexMatter extends baseMatterData {
    data: {
        name: string;
        links: {
            name: string;
            link: string;
        }[];
        languages: string[];
        dbs: string[];
        tech: string[];
    };
}
