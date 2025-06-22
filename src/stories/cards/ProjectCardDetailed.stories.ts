import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ProjectCardDetailed } from './ProjectCardDetailed';

const meta = {
    title: 'UI/Cards/ProjectCardDetailed',
    component: ProjectCardDetailed,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ProjectCardDetailed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        project: {
            title: 'Project Title',
            summary: 'Project Summary',
            description: 'Project Description',
            technologies: ['React', 'TypeScript', 'Tailwind CSS'],
            completed: '2023-01-01',
            imgs: [{
                "resource": "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/455/962/datas/gallery.jpg",
                "alt": "tempText"
            }],
            challenges: [],
            awards: [],
            personalNotes: '',
            links: []
        }
    }
};
