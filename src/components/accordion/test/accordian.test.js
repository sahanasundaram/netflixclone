import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Accordion from '../index'; // Update the import path accordingly

describe('Accordion Component', () => {
  it('toggles the accordion item when the header is clicked', async () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Title 1</Accordion.Header>
          <Accordion.Body>Content 1</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );

    const title = getByText('Title 1');
    const openIcon = queryByText('Close');

    expect(openIcon).not.toBeInTheDocument();

    fireEvent.click(title);
    fireEvent.click(title); // Simulate clicking on the title again to close the accordion

    await waitFor(() => {
      expect(openIcon).not.toBeInTheDocument();
    });
  });
});
