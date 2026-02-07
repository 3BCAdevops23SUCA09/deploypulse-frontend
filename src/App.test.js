import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/DeployPulse/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders feature dashboard title', () => {
  render(<App />);
  const subtitle = screen.getByText(/Feature Lifecycle Tracking Dashboard/i);
  expect(subtitle).toBeInTheDocument();
});

test('renders create feature heading', () => {
  render(<App />);
  const createFeatureHeading = screen.getByText(/Create Feature/i);
  expect(createFeatureHeading).toBeInTheDocument();
});

test('renders all features heading', () => {
  render(<App />);
  const allFeaturesHeading = screen.getByText(/All Features/i);
  expect(allFeaturesHeading).toBeInTheDocument();
});

test('renders form inputs for feature creation', () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText(/Feature Name|Description|Owner/i);
  expect(inputs.length).toBeGreaterThan(0);
});

test('renders status select dropdown', () => {
  render(<App />);
  const selectElements = screen.getAllByDisplayValue(/IN_DEVELOPMENT/i);
  expect(selectElements.length).toBeGreaterThan(0);
});

test('renders add feature button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Add Feature/i });
  expect(button).toBeInTheDocument();
});


