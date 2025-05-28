import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ImageBanner } from './ImageBanner';

const meta = {
    title: 'UI/Images/ImageBanner',
    component: ImageBanner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ImageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    }
};
