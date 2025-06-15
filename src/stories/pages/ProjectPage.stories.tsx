import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProjectPage } from './ProjectPage';

const meta = {
    title: 'UI/ProjectPage',
    component: ProjectPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ProjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        project: {
            title: 'Sample Project',
            summary: "Sample summar",
            description: 'This is a sample project description.',
            technologies: ['React', 'TypeScript', 'Storybook'],
            completed: '2023-10-01',
            imgs: [{ resource: 'fakeURL', alt: 'Sample Image' }],
            challenges: ['No significant challenges faced.'],
            awards: null,
            personalNotes: 'This was a fun project to work on.',
            links: [
                { name: 'GitHub', url: 'fakeURL' },
            ]
        }
    }
};
