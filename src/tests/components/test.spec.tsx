import { render } from '@testing-library/react';
import Users from '@pages/Users';

describe('Root component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<Users />);
    expect(getByText(/Users/i)).toBeInTheDocument();
  });
});
