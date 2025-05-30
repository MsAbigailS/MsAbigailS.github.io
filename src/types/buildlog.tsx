import type { images } from './project'

export interface BuildLog {
    date: string;
    time: string;
    summary?: string;
    updates: Update[];
}

type Update = {
    // type: 'Added' | 'Removed' | 'Modified';
    type: string;
    description: string;
    images: images[];
    videos?: string[];
    personalNotes?: string;
}