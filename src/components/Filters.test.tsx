import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from './Filters';

describe('Filters', () => {
    const defaultProps = {
        categories: ['Dairy', 'Bakery'],
        category: 'all',
        onCategoryChange: vi.fn(),
        searchTerm: '',
        onSearch: vi.fn(),
        staplesOnly: false,
        onStaplesToggle: vi.fn(),
    };

    it('renders all inputs', () => {
        render(<Filters {...defaultProps} />);

        expect(screen.getByLabelText(/search products/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/focus on staple items only/i)).toBeInTheDocument();
    });

    it('calls onSearch when input changes', () => {
        render(<Filters {...defaultProps} />);
        const input = screen.getByLabelText(/search products/i);
        fireEvent.change(input, { target: { value: 'milk' } });
        expect(defaultProps.onSearch).toHaveBeenCalledWith('milk');
    });

    it('calls onCategoryChange when select changes', () => {
        render(<Filters {...defaultProps} />);
        const select = screen.getByLabelText(/category/i);
        fireEvent.change(select, { target: { value: 'Dairy' } });
        expect(defaultProps.onCategoryChange).toHaveBeenCalledWith('Dairy');
    });

    it('calls onStaplesToggle when checkbox changes', () => {
        render(<Filters {...defaultProps} />);
        const checkbox = screen.getByLabelText(/focus on staple items only/i);
        fireEvent.click(checkbox);
        expect(defaultProps.onStaplesToggle).toHaveBeenCalledWith(true);
    });
});
