import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ConstructionNotice } from './ConstructionNotice';

const meta = {
    title: 'UI/ConstructionNotice',
    component: ConstructionNotice,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ConstructionNotice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
