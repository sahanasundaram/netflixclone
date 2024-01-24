import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock the useAuthListener hook
jest.mock('./hooks/index', () => ({
  useAuthListener: jest.fn(),
}));

describe('App Component', () => {
  test('renders sign-in page when user is not authenticated', async () => {
    // Mock the useAuthListener hook to return an object with user set to null
    jest.spyOn(require('./hooks/index'), 'useAuthListener').mockReturnValue({ user: null });

    render(
      <MemoryRouter initialEntries={['/signin']}>
        <App />
      </MemoryRouter>
    );

    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      expect(screen.getByTestId('signin-page')).toBeInTheDocument();
    });
  });

  test('renders browse page when user is authenticated', async () => {
    // Mock the useAuthListener hook to return an object with user set to some mock user data
    jest.spyOn(require('./hooks/index'), 'useAuthListener').mockReturnValue({ user: { /* mock user data */ } });

    render(
      <MemoryRouter initialEntries={['/browse']}>
        <App />
      </MemoryRouter>
    );

    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      expect(screen.getByTestId('browse-page')).toBeInTheDocument();
    });
  });
});
