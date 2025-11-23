import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { listProducts, getPriceTimeline } from '../services/dataService';
import { formatCurrency, formatMovement } from '../utils/format';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const allProducts = useMemo(() => listProducts(), []);
    const product = allProducts.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="app-shell">
                <h1>Product Not Found</h1>
                <Link to="/">Back to Dashboard</Link>
            </div>
        );
    }

    const priceHistory = useMemo(() => getPriceTimeline(product), [product]);

    return (
        <div className="app-shell">
            <header className="hero" style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
                <Link to="/" style={{ color: 'var(--text-light)', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
                    &larr; Back to Dashboard
                </Link>
                <h1>{product.name}</h1>
                <p className="hero__lead">{product.brand} • {product.size}</p>
            </header>

            <main className="dashboard-grid">
                <section className="panel">
                    <h2>Price History</h2>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer>
                            <LineChart data={priceHistory}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                <XAxis dataKey="date" stroke="#888" fontSize={12} tickMargin={10} />
                                <YAxis stroke="#888" fontSize={12} tickFormatter={(val) => `£${val}`} />
                                <Tooltip />
                                {Object.keys(priceHistory[0] || {})
                                    .filter((key) => key !== 'date')
                                    .map((key, index) => (
                                        <Line
                                            key={key}
                                            type="monotone"
                                            dataKey={key}
                                            stroke={`hsl(${index * 60}, 70%, 50%)`}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </section>

                <section className="panel">
                    <h2>Details</h2>
                    <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem' }}>
                        <dt>Category</dt>
                        <dd>{product.category}</dd>
                        <dt>Staple</dt>
                        <dd>{product.staple ? 'Yes' : 'No'}</dd>
                        <dt>Nutrition</dt>
                        <dd>{product.nutrition || 'N/A'}</dd>
                        <dt>Best Price</dt>
                        <dd>{formatCurrency(product.cheapest.price)} at {product.cheapest.supermarketId.toUpperCase()}</dd>
                        <dt>Savings</dt>
                        <dd>{formatCurrency(product.savings)} vs {product.priciest.supermarketId.toUpperCase()}</dd>
                        <dt>Trend</dt>
                        <dd>{formatMovement(product.movement)}</dd>
                    </dl>
                </section>
            </main>
        </div>
    );
}

export default ProductDetails;
