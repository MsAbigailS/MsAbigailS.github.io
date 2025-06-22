import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BubbleCard } from './BubbleCard';

const meta = {
    title: 'UI/Cards/BubbleCard',
    component: BubbleCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "A card with rounded corners and a light shadow."
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof BubbleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// default card
export const Primary: Story = {
    args: {
        children: (<div className="text-white">Child element</ div >)
    },
};