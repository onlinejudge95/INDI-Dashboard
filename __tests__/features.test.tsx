import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '@/app/(common)/features/page';

describe('Page', () => {
  it('renders features', () => {
    render(<Page />);
    const features = document.querySelector('section');
    expect(features).toBeInTheDocument();
  });
});
