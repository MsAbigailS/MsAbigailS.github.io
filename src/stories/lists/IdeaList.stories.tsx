import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { IdeaList } from './IdeaList';

const meta = {
    title: 'UI/Lists/IdeaList',
    component: IdeaList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof IdeaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        ideas: [
            { title: 'Idea 1', status: 'In Progress', priority: 'High' },
            { title: 'Idea 2', status: 'In Progress', priority: 'Medium' },
            { title: 'Idea 3', status: 'In Progress', priority: 'Low' }
        ],
    },
};
