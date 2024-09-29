import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '../app/page';

describe('Page', () => {
  it('renders hero', () => {
    render(<Page />);
    const hero = document.querySelector('section');
    expect(hero).toBeInTheDocument();
  });
});
