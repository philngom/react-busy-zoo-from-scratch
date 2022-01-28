import { render, screen } from '@testing-library/react';
import Shop from './Shop/Shop';

test('renders learn react link', () => {
  render(<Shop />);
  const linkElement = screen.getAllByRole('button');

  expect(linkElement[0]).toBeInTheDocument();
});
