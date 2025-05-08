import React from 'react';

export interface FooterProps {
}

export const Footer = ({ }: FooterProps) => (
    <header data-id="footer" className="min-h-15 shadow flex items-center justify-between">
        <div data-id="footer-item">
            <h1>left</h1>
        </div>
        <div data-id="footer-item">
            <p>right</p>
        </div>
    </header>
);
