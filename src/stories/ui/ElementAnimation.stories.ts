import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import type { ReactNode } from 'react';
import { ElementAnimation } from './ElementAnimation';

const meta = {
    title: 'Example/ElementAnimation',
    component: ElementAnimation,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ElementAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

// default animation
export const Primary: Story = {
    args: {
        animation: 'tilt'
    },
}