import type { BuildLog } from "../types/buildlog";

export interface Project {
    title: string;
    description: string;
    summary: string;
    technologies: string[];
    completed: string | null;
    imgs: images[];
    challenges: string[] | null;
    awards: awards[] | null;
    personalNotes: string;
    links: links[];
    buildLog?: BuildLog[] | null;
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