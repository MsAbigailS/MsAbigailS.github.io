import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ImageCarousel } from './ImageCarousel';

const meta = {
    title: 'Example/ImageCarousel',
    component: ImageCarousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        images: [
            {
                resource: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltYWdlfGVufDB8fHx8MTY5MjQ1NTY3Ng&ixlib=rb-4.0.3&q=80&w=1080',
                alt: 'Image 1',
            }
        ],
    }
};