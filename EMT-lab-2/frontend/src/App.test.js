import { render, screen } from '@testing-library/react';
import App from './components/App/App';

test('renders test testing link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test testing/i);
  expect(linkElement).toBeInTheDocument();
});
