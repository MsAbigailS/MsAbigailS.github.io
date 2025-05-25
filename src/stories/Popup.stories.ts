import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Popup } from './Popup';

const meta = {
    title: 'Example/Popup',
    component: Popup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};