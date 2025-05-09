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
        theme: {
            control: {
                type: 'select',
                options: ['white', 'blue', 'green', 'orange'],
            },
        },
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {
        primary: true,
        title: 'Card Title',
    },
};

// project card
export const Project: Story = {
    args: {
        primary: false,
        title: 'Project Title',
        description: 'Project Description',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        completed: new Date('2023-01-01'),
    }
}