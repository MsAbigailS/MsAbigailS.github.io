export interface Idea {
    title: string;
    status: 'Completed' | 'In Progress' | 'Closed' | 'Pending';
    priority: string;
}