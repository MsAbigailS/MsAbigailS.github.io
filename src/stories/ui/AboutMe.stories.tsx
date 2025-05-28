import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import type { ReactNode } from 'react';
import { AboutMe } from './AboutMe';

const meta = {
    title: 'UI/AboutMe',
    component: AboutMe,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof AboutMe>;

export default meta;
type Story = StoryObj<typeof meta>;

// default animation
export const Primary: Story = {
    args: {
    },
}