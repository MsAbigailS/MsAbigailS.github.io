import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Card } from './Card';

const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <div>
                <h2 className="text-xl font-semibold">Card Title</h2>
                <p className="text-sm text-gray-500">This is the card content.</p>
            </div>
        ),
    },
};

export const Project: Story = {
    args: {
        children: (
            <div>
                Cards
            </div>
        ),
    }
}