import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '../../src/App';

describe('App', () => {
    it('renders the Vite and React logos', () => {
        render(<App />);
        expect(screen.getByAltText('React logo')).toBeInTheDocument();
    });

    it('should have a heading with the text "Vite + React"', () => {
        render(<App />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vite + React');
    });
});
