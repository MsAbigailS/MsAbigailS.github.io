import { Children, useMemo } from 'react';
import { Card } from '../ui/Card';

export interface BubbleCardProps {
    children: React.ReactNode;
    shadowSize?: 'sm' | 'md'
}

export const BubbleCard = ({
    children,
    shadowSize
}: BubbleCardProps) => {

    return (
        <Card>
            <div
                className={`rounded-4xl 
                p-6
                w-full h-full 
                ${shadowSize === 'sm' ? 'shadow-sm'
                        :
                        `${shadowSize === 'md' ? 'shadow-md' : 'shadow-lg'}`
                    }
                shadow-gray-50/10 border border-gray-400/10
                border-t-gray-300/5
                flex flex-col`}
            >

                {children}
            </div>
        </Card >
    );
};
