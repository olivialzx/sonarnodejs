import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('renders a header with text', () => {
    render(<App />);
    expect(screen.getByText(/dashboard/i)).toBeDefined();
  });
});
