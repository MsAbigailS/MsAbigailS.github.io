import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
            resource: 'demo.jpg',
            alt: 'Demo Image',
        },
        fit: 'object-cover',
    },
};
