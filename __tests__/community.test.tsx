import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '../app/community/page';

describe('Page', () => {
  it('renders features', () => {
    render(<Page />);
    const community = document.querySelector('section');
    expect(community).toBeInTheDocument();
  });
});
