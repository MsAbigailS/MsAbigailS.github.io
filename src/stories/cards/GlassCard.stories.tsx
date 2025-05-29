import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { GlassCard } from './GlassCard';

const meta = {
    title: 'UI/Card/GlassCard',
    component: GlassCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {

    },
};