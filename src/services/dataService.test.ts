import { describe, it, expect } from 'vitest';
import { buildBasketTotals, getPriceTimeline, listProducts } from '../services/dataService';
import { products } from '../data/products';

describe('dataService', () => {
    describe('listProducts', () => {
        it('returns all products when no filters are applied', () => {
            const result = listProducts();
            expect(result.length).toBe(products.length);
        });

        it('filters by category', () => {
            const result = listProducts({ category: 'Dairy' });
            expect(result.every(p => p.category === 'Dairy')).toBe(true);
        });

        it('filters by search term', () => {
            const result = listProducts({ searchTerm: 'milk' });
            expect(result.length).toBeGreaterThan(0);
            expect(result[0].name.toLowerCase()).toContain('milk');
        });

        it('filters by staples only', () => {
            const result = listProducts({ staplesOnly: true });
            expect(result.every(p => p.staple)).toBe(true);
        });
    });

    describe('buildBasketTotals', () => {
        it('calculates totals correctly', () => {
            const result = buildBasketTotals();
            expect(result.entries.length).toBeGreaterThan(0);
            expect(result.leader).toBeDefined();
            expect(result.trailing).toBeDefined();
            expect(result.leader.total).toBeLessThanOrEqual(result.trailing.total);
        });
    });

    describe('getPriceTimeline', () => {
        it('returns timeline data for a product', () => {
            const product = products[0];
            const timeline = getPriceTimeline(product);
            expect(timeline.length).toBeGreaterThan(0);
            expect(timeline[0]).toHaveProperty('date');
        });
    });
});
