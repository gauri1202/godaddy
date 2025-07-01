import { render, screen } from '@testing-library/react';
import RepoList from '../components/RepoList';
import { test, expect } from 'vitest';

test('renders loading state', () => {
  render(<RepoList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
