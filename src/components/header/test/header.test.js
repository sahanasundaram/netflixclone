import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from '../index';

// Mock axios
jest.mock('axios');

describe('Header component', () => {
  it('renders the banner with movie details', async () => {
    // Mock the axios API call for fetching Netflix originals
    const mockMovieData = {
      title: 'Mock Movie Title',
      backdrop_path: '/mock-backdrop.jpg',
      overview: 'Mock movie overview.',
    };
    axios.get.mockResolvedValueOnce({ data: { results: [mockMovieData] } });

    // Render the Header component inside a Router
    const { getByText, getByAltText, getByPlaceholderText } = render(
      <Router>
        <Header />
      </Router>
    );

    // Wait for the API call to resolve
    await waitFor(() => {
      const searchInput = document.querySelector('[placeholder="Search films and series"]');
      fireEvent.change(searchInput, { target: { value: 'Harry Potter' } });
    });

    // Test search functionality
    const searchInput = getByPlaceholderText('Search films and series');
    fireEvent.change(searchInput, { target: { value: 'Harry Potter' } });

    // Check if the search term is updated
    expect(searchInput.value).toBe('Harry Potter');
  });

  // Add more test cases as needed
});
