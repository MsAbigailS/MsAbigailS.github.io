export interface Project {
    title: string;
    description: string;
    technologies: string[];
    completed: string | null;
    imgs: images[];
    challenges: string[] | null;
    awards: awards[] | null;
    personalNotes: string;
    links: links[];
}

export type awards = {
    key: string;
    values: string[];
}

export type links = {
    name: string;
    url: string;
}

export type images = {
    resource: string;
    alt: string;
}