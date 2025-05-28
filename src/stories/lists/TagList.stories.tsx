import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TagList } from './TagList';

const meta = {
    title: 'UI/Lists/TagList',
    component: TagList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tags: [
            'Tag1',
            'Tag2',
            'Tag3',
            'Tag4',
            'Tag5'
        ],
    }
};
