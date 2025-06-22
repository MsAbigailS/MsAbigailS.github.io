import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ListCard } from './ListCard';

const meta = {
    title: 'UI/Cards/ListCard',
    component: ListCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "sample title",
        items: ["Sample Item #1", "Sample Items #2"]
    }
};
