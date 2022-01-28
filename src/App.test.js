import { render, screen } from '@testing-library/react';
import AnimalFight from './AnimalFight/AnimalFight';

test('renders learn react link', () => {
  render(<AnimalFight />);
  const linkElement = screen.getByText(/munching/i);
  expect(linkElement).toBeInTheDocument();
});
