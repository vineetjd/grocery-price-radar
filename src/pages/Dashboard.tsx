import { useEffect, useMemo, useState } from 'react';
import Filters from '../components/Filters';
import Hero from '../components/Hero';
import ProductTable from '../components/ProductTable';
import BasketSummary from '../components/BasketSummary';
import BestValueGrid from '../components/BestValueGrid';
import SupermarketGrid from '../components/SupermarketGrid';
import PriceTrends from '../components/PriceTrends';
import PriceAlerts from '../components/PriceAlerts';
import {
    listProducts,
    listSupermarkets,
    getCategoryList,
    buildBasketTotals,
    getTopMovers
} from '../services/dataService';
import { DerivedProduct } from '../types';

function Dashboard() {
    const supermarkets = useMemo(() => listSupermarkets(), []);
    const categories = useMemo(() => getCategoryList(), []);
    const masterProducts = useMemo(() => listProducts(), []);
    const [category, setCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [staplesOnly, setStaplesOnly] = useState(false);
    const [focusedProduct, setFocusedProduct] = useState<DerivedProduct | null>(null);

    const filteredProducts = useMemo(() => {
        return listProducts({
            category: category !== 'all' ? category : undefined,
            searchTerm,
            staplesOnly
        });
    }, [category, searchTerm, staplesOnly]);

    useEffect(() => {
        if (!filteredProducts.length) {
            setFocusedProduct(null);
            return;
        }
        if (!focusedProduct || !filteredProducts.some((item) => item.id === focusedProduct.id)) {
            setFocusedProduct(filteredProducts[0]);
        }
    }, [filteredProducts, focusedProduct]);

    const basket = useMemo(() => buildBasketTotals(filteredProducts.length ? filteredProducts : masterProducts), [
        filteredProducts,
        masterProducts
    ]);

    const bestValueProducts = useMemo(() => {
        const sorted = masterProducts.slice().sort((a, b) => b.savings - a.savings);
        return sorted.slice(0, 4);
    }, [masterProducts]);

    const movers = useMemo(() => getTopMovers(3), []);

    const stapleCount = masterProducts.filter((product) => product.staple).length;
    const lastUpdated = masterProducts.reduce(
        (latest, product) => (product.lastUpdated > latest ? product.lastUpdated : latest),
        masterProducts[0]?.lastUpdated ?? new Date().toISOString()
    );

    const spread = basket.trailing ? basket.trailing.total - basket.leader.total : 0;

    return (
        <div className="app-shell">
            <Hero
                productCount={masterProducts.length}
                stapleCount={stapleCount}
                lastUpdated={lastUpdated}
                leader={basket.leader}
                spread={spread}
            />

            <main>
                <Filters
                    categories={categories}
                    category={category}
                    onCategoryChange={setCategory}
                    searchTerm={searchTerm}
                    onSearch={setSearchTerm}
                    staplesOnly={staplesOnly}
                    onStaplesToggle={setStaplesOnly}
                />

                <div className="dashboard-grid">
                    <ProductTable
                        products={filteredProducts}
                        onSelect={setFocusedProduct}
                        selectedId={focusedProduct?.id}
                    />
                    <PriceTrends product={focusedProduct} supermarkets={supermarkets} />
                    <BasketSummary basket={basket} />
                    <BestValueGrid products={bestValueProducts} />
                    <PriceAlerts movers={movers} />
                    <SupermarketGrid basket={basket} />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
