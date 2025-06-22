import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { GradientText } from './GradientText';

const meta = {
    title: 'UI/GradientText',
    component: GradientText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' }
    }
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: "Sample Text",
        primaryColor: "red",
        secondaryColor: "blue"
    }
};
