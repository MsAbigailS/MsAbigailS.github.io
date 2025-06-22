import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Image } from './Image';

const meta = {
    title: 'UI/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        image: {
            resource: 'ModelMaintenance10.jpg',
            alt: 'Demo Image',
        },
        fit: 'object-cover',
    },
};
