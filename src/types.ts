export interface PricePoint {
    supermarketId: string;
    price: number;
    promo?: string;
}

export interface PriceHistoryEntry {
    date: string;
    points: Record<string, number>;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    size: string;
    category: string;
    nutrition?: string;
    staple: boolean;
    prices: PricePoint[];
    priceHistory: PriceHistoryEntry[];
    lastUpdated: string;
}

export interface Supermarket {
    id: string;
    name: string;
    color: string;
    logo: string;
    website: string;
    tagline: string;
    loyalty: string;
}

export interface BasketTotal {
    market: Supermarket;
    total: number;
}

export interface BasketComparison {
    entries: BasketTotal[];
    leader: BasketTotal;
    trailing: BasketTotal;
}

export interface DerivedProduct extends Product {
    cheapest: PricePoint;
    priciest: PricePoint;
    savings: number;
    movement: number;
    spreadPercent: number;
}
