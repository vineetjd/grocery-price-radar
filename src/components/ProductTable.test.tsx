import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductTable from './ProductTable';
import { DerivedProduct } from '../types';

const mockProduct: DerivedProduct = {
    id: 'test-product',
    name: 'Test Product',
    brand: 'Test Brand',
    size: '1kg',
    category: 'Test Category',
    staple: true,
    prices: [],
    priceHistory: [],
    lastUpdated: '2024-01-01',
    cheapest: { supermarketId: 'tesco', price: 1.00 },
    priciest: { supermarketId: 'waitrose', price: 1.50 },
    savings: 0.50,
    movement: 0,
    spreadPercent: 33.3
};

describe('ProductTable', () => {
    it('renders product information', () => {
        render(
            <ProductTable
                products={[mockProduct]}
                onSelect={() => { }}
                selectedId={undefined}
            />
        );

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        // Use regex for partial match since brand is part of a larger string
        expect(screen.getByText(/Test Brand/)).toBeInTheDocument();
    });

    it('calls onSelect when a row is clicked', () => {
        const handleSelect = vi.fn();
        render(
            <ProductTable
                products={[mockProduct]}
                onSelect={handleSelect}
                selectedId={undefined}
            />
        );

        fireEvent.click(screen.getByText('Test Product'));
        expect(handleSelect).toHaveBeenCalledWith(mockProduct);
    });

    it('highlights the selected row', () => {
        render(
            <ProductTable
                products={[mockProduct]}
                onSelect={() => { }}
                selectedId="test-product"
            />
        );

        const row = screen.getByRole('row', { name: /Test Product/i });
        expect(row).toHaveClass('is-selected');
    });
});
