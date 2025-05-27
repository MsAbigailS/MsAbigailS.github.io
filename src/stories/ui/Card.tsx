import { useMemo, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ElementAnimation } from './ElementAnimation';
import { Tag } from './Tag';
import { ImageCarousel } from './ImageCarousel';
import { Popup } from './Popup';
// < !--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->

export interface CardProps {
    children: React.ReactNode;
};

export const Card = ({
    children
}: CardProps) => {
    return (
        <div id="card" className={`border-1`}>
            {children}
        </div>
    );
};
