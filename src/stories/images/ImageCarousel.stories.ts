import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ImageCarousel } from './ImageCarousel';

const meta = {
    title: 'UI/Image/ImageCarousel',
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
                resource: 'ModelMaintenance10.jpg',
                alt: 'Image 1',
            }
        ],
    }
};