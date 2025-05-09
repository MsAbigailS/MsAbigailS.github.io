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

// project card
export const Project: Story = {
    args: {
        primary: false,
        backgroundColor: '#f8f3f2',
        textColor: '#010102',
        title: 'Project Title',
        description: 'Project Description',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        completed: new Date('2023-01-01'),
    }
}