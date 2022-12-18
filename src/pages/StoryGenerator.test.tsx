import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoryGenerator } from 'pages';

test('renders learn react link', () => {
  render(<StoryGenerator />);
  const linkElement = screen.getByText(/main character/i);
  expect(linkElement).toBeInTheDocument();
});
