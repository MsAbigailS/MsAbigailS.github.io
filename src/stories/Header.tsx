import React from 'react';

export interface HeaderProps {
  /** What to include in upper left corner */
  left?: React.ReactNode;
  /** What to include in upper right corner */
  right?: React.ReactNode;
}

export const Header = ({
  left = <p>default left</p>,
  right = <p>default right</p>,
}: HeaderProps) => (
  <header data-id="header" className="min-h-15 shadow flex items-center justify-between">
    <div data-id="header-item">
      <p className={`hover:cursor-pointer`}>{left}</p>
    </div>
    <div data-id="header-item">
      <p className={`hover:cursor-pointer`}>{right}</p>
    </div>
  </header>
);
