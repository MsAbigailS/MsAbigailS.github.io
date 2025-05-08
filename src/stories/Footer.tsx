import React from 'react';

export interface FooterProps {
}

export const Footer = ({ }: FooterProps) => (
    <footer data-id="footer" className="min-h-15 flex items-center justify-between mt-auto">
        <div data-id="footer-item">
            <h1>footer</h1>
        </div>
        <div data-id="footer-item">
            <p>right</p>
        </div>
    </footer>
);
