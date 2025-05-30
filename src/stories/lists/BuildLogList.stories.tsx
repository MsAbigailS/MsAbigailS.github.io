import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BuildLogList } from './BuildLogList';

const meta = {
    title: 'UI/Lists/BuildLogList',
    component: BuildLogList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof BuildLogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};