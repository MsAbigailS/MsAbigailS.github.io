import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProjectCard } from './ProjectCard';

const meta = {
    title: 'UI/Cards/ProjectCard',
    component: ProjectCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Project Title',
        description: 'Project Description',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        completed: '2023-01-01',
        image: [{
            "resource": "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/455/962/datas/gallery.jpg",
            "alt": "tempText"
        }]
    }
};
