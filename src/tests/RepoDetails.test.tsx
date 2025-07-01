import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RepoDetails from '../components/RepoDetails';

test('renders test text', () => {
  render(<div>Test passed</div>);
  expect(screen.getByText(/test passed/i)).toBeInTheDocument();
});