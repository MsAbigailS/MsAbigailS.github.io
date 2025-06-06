import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../stories/helpers/routing'

export interface HeaderProps {
  /** What to include in upper left corner */
  left?: keyof typeof routes | React.ReactNode;
  /** What to include in upper right corner */
  right?: keyof typeof routes | React.ReactNode;
}

export const Header = ({
  left = 'Home',
  right = 'Home'
}: HeaderProps) => {
  const navigate = useNavigate();
  let navigateLeft: string | undefined;
  let navigateRight: string | undefined;

  if (typeof left === 'string' && left in routes) {
    const route = routes[left as keyof typeof routes];
    if (typeof route === 'string') {
      navigateLeft = route;
    }
  }

  if (typeof right === 'string' && right in routes) {
    const route = routes[right as keyof typeof routes];
    if (typeof route === 'string') {
      navigateRight = route;
    }
  }

  return (
    <header
      data-id="header"
      className="min-h-15 shadow flex items-center justify-between"
    >
      {/* left of header */}
      <div data-id="header-item">
        <div
          onClick={() => { if (navigateLeft) navigate(navigateLeft); }}
          className={`hover:cursor-pointer`}
        >
          {left}
        </div>
      </div>

      {/* right of header */}
      <div data-id="header-item">
        <div
          onClick={() => { if (navigateRight) navigate(navigateRight); }}
          className={`hover:cursor-pointer`}
        >
          {right}
        </div>
      </div>
    </header>
  );
};
