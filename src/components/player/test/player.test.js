import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Player from '../index';

test('toggles Player.Video visibility on button click', () => {
  const { getByText, queryByTestId } = render(
    <Player>
      <Player.Button />
      <Player.Video src="example.mp4" data-testid="player-video" />
    </Player>
  );

  // Initially, Player.Video should not be visible
  expect(queryByTestId('player-video')).toBeNull();

  // Click the Play button
  fireEvent.click(getByText('Play'));

  // Now, Player.Video should be visible
  expect(queryByTestId('player-video')).toBeInTheDocument();

  // Click the Play button again
  fireEvent.click(getByText('Play'));

  // Now, Player.Video should not be visible again
  expect(queryByTestId('player-video')).toBeNull();
});
