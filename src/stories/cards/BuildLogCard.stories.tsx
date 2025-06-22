import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { BuildLogCard } from './BuildLogCard';

const meta = {
    title: 'UI/cards/BuildLogCard',
    component: BuildLogCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "This component showcases the details for a buildlog entry. This card has a glass effect with white text that works best on dark backgrounds."
            }
        }
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
                    description: 'Sample description',
                    images: [{ resource: 'buildLog/Projects_06_14_2025_Desktop_Video.gif', alt: "Alt text acts as subtitle" }],
                    videos: [],
                    personalNotes: 'Excited about this feature!'
                }
            ]
        }
    }
};
