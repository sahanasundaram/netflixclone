import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FeatureContext } from '../index'; // Update the import path accordingly
import Card from '../index';

describe('Card Component', () => {
  it('renders Card component with children', () => {
    const { getByText } = render(<Card>Test Content</Card>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('renders Card.Group component with children', () => {
    const { getByText } = render(<Card.Group>Group Content</Card.Group>);
    expect(getByText('Group Content')).toBeInTheDocument();
  });

  it('renders Card.Title component with children', () => {
    const { getByText } = render(<Card.Title>Title Content</Card.Title>);
    expect(getByText('Title Content')).toBeInTheDocument();
  });

  it('renders Card.SubTitle component with children', () => {
    const { getByText } = render(<Card.SubTitle>SubTitle Content</Card.SubTitle>);
    expect(getByText('SubTitle Content')).toBeInTheDocument();
  });

  it('renders Card.Text component with children', () => {
    const { getByText } = render(<Card.Text>Text Content</Card.Text>);
    expect(getByText('Text Content')).toBeInTheDocument();
  });

  it('renders Card.Entities component with children', () => {
    const { getByText } = render(<Card.Entities>Entities Content</Card.Entities>);
    expect(getByText('Entities Content')).toBeInTheDocument();
  });

  it('renders Card.Meta component with children', () => {
    const { getByText } = render(<Card.Meta>Meta Content</Card.Meta>);
    expect(getByText('Meta Content')).toBeInTheDocument();
  });

  it('renders Card.Item component with children', () => {
    const { getByText } = render(
      <FeatureContext.Provider value={{ setShowFeature: jest.fn(), setItemFeature: jest.fn() }}>
        <Card.Item item={{ title: 'Test Item' }}>Item Content</Card.Item>
      </FeatureContext.Provider>
    );
    expect(getByText('Item Content')).toBeInTheDocument();
  });

  it('fires onClick event for Card.Item component', () => {
    const setShowFeature = jest.fn();
    const setItemFeature = jest.fn();

    const { getByText } = render(
      <FeatureContext.Provider value={{ setShowFeature, setItemFeature }}>
        <Card.Item item={{ title: 'Test Item' }}>Item Content</Card.Item>
      </FeatureContext.Provider>
    );

    fireEvent.click(getByText('Item Content'));

    expect(setShowFeature).toHaveBeenCalledWith(true);
    expect(setItemFeature).toHaveBeenCalledWith({ title: 'Test Item' });
  });

  it('renders Card.Image component', () => {
    const { container } = render(<Card.Image src="test.jpg" alt="Test Image" />);
    const imageElement = container.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Test Image');
  });

  it('renders Card.Feature component when showFeature is true', () => {
    const { getByText } = render(
      <FeatureContext.Provider value={{ showFeature: true, itemFeature: { title: 'Test Feature', genre: 'action', slug: 'test' }, setShowFeature: jest.fn() }}>
        <Card.Feature>Feature Content</Card.Feature>
      </FeatureContext.Provider>
    );
    expect(getByText('Feature Content')).toBeInTheDocument();
  });

  it('does not render Card.Feature component when showFeature is false', () => {
    const { queryByText } = render(
      <FeatureContext.Provider value={{ showFeature: false, itemFeature: { title: 'Test Feature', genre: 'action', slug: 'test' }, setShowFeature: jest.fn() }}>
        <Card.Feature>Feature Content</Card.Feature>
      </FeatureContext.Provider>
    );
    expect(queryByText('Feature Content')).toBeNull();
  });

});
