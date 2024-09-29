import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '../app/page';

describe('Page', () => {
  it('renders navbar', () => {
    render(<Page />);
    const navbar = document.querySelector('header');
    expect(navbar).toBeInTheDocument();
  });

  it('renders hero', () => {
    render(<Page />);
    const hero = document.querySelector('section');
    expect(hero).toBeInTheDocument();
  });
});
