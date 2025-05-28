import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProjectList } from './ProjectList';

const meta = {
    title: 'UI/Lists/ProjectList',
    component: ProjectList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ProjectList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // children: (
        //     <div>
        //         <h2 className="text-xl font-semibold">ProjectList Title</h2>
        //         <p className="text-sm text-gray-500">This is the ProjectList content.</p>
        //     </div>
        // ),
    },
};

export const Project: Story = {
    args: {
        // children: (
        //     <div>
        //         Project Lists
        //     </div>
        // ),
    }
}