import { Children, useMemo } from 'react';
import { Card } from '../ui/Card';

export interface BubbleCardProps {
    children: React.ReactNode;
}

export const BubbleCard = ({
    children
}: BubbleCardProps) => {

    return (
        <Card>
            <div
                className="rounded-4xl p-6
                w-full h-full shadow-lg shadow-gray-50/20 border border-gray-400/10
                border-t-gray-300/5
                flex flex-col"
            >

                {children}
            </div>
        </Card>
    );
};
