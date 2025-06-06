import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProjectBuildLogPage } from './ProjectBuildLogPage';

const meta = {
    title: 'UI/ProjectBuildLogPage',
    component: ProjectBuildLogPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ProjectBuildLogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        project: {
            title: 'Sample Project',
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
