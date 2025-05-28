import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { List } from './List';

const meta = {
    title: 'UI/List',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <div>
                <h2 className="text-xl font-semibold" > List</ h2 >
                <p className="text-sm text-gray-500"> This is the List content.</p>
            </div>
        ),
    },
};

export const Project: Story = {
    args: {
        children: (
            <div>
                Lists
            </div>
        ),
    }
}