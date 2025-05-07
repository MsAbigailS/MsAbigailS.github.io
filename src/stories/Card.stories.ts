import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Card } from './Card';

const meta = {
    title: 'Example/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {
        primary: true,
        backgroundColor: '#ffffff',
        title: 'Card Title',
    },
};
