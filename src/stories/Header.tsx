import React from 'react';

export interface HeaderProps {
}

export const Header = ({ }: HeaderProps) => (
  <header data-id="header" className="min-h-15 shadow flex items-center justify-between">
    <div data-id="header-item">
      <nav>
        <h1>left</h1>
      </nav>
    </div>
    <div data-id="header-item">
      <p>right</p>
    </div>

  </header>
);
