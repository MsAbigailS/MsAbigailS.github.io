import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BuildLogCard } from './BuildLogCard';

const meta = {
    title: 'UI/BuildLogCard',
    component: BuildLogCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof BuildLogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        buildItem: {
            date: '2023-10-01',
            time: '12:00',
            summary: 'Initial build log entry',
            updates: [
                {
                    type: 'Added',
                    description: 'Added new feature X',
                    images: [],
                    videos: [],
                    personalNotes: 'Excited about this feature!'
                }
            ]
        }
    }
};
