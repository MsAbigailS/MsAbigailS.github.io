import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BackgroundShapes } from './BackgroundShapes';

const meta = {
    title: 'UI/BackgroundShapes',
    component: BackgroundShapes,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof BackgroundShapes>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {

    },
};