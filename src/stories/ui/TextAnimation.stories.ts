import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextAnimation } from './TextAnimation';

const meta = {
    title: 'Example/TextAnimation',
    component: TextAnimation,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        text: 'Hello World',
        size: 'large',
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        text: 'Hello World',
        size: 'medium',
    },
};