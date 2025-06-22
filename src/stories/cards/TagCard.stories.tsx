import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TagCard } from './TagCard';

const meta = {
    title: 'UI/Cards/TagCard',
    component: TagCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "A card with an SVG and text."
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof TagCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {
        text: "Sample Text",
        size: "md"
    },
};