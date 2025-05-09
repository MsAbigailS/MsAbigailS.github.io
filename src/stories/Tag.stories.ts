import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tag } from './Tag';

const meta = {
    title: 'Example/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['white', 'blue', 'green', 'orange', 'pink'],
            },
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {
        label: 'Tag',
        theme: 'white',
    },
};