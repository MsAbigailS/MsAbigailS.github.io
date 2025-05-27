import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Test } from './Test';

const meta = {
    title: 'Example/Test',
    component: Test,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
};