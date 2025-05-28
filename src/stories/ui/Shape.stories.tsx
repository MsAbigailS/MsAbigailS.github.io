import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Shape } from './Shape';

const meta = {
    title: 'UI/Shape',
    component: Shape,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {

    },
};