import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Footer } from './Footer';

const meta = {
    title: 'Example/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// default footer
export const Primary: Story = {
};
