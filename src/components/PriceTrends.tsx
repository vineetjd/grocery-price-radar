import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getPriceTimeline } from '../services/dataService';
import { formatCurrency, formatDate } from '../utils/format';
import { DerivedProduct, Supermarket } from '../types';

interface PriceTrendsProps {
  product: DerivedProduct | null;
  supermarkets: Supermarket[];
}

function PriceTrends({ product, supermarkets }: PriceTrendsProps) {
  if (!product) {
    return (
      <section className="panel">
        <p>Select a product to see how prices have moved over the last month.</p>
      </section>
    );
  }

  const timeline = getPriceTimeline(product);

  return (
    <section className="panel trends-panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Price history</p>
          <h2>{product.name}</h2>
          <p>
            {product.size} • Updated {formatDate(product.lastUpdated)}
          </p>
        </div>
      </header>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={timeline} margin={{ top: 20, right: 24, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e6e6e6" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={(value) => `£${value.toFixed(2)}`} />
          <Tooltip content={<PriceTooltip />} />
          {supermarkets.map((market) => (
            <Line
              key={market.id}
              type="monotone"
              dataKey={market.id}
              stroke={market.color}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

const PriceTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="tooltip">
      <p>{label}</p>
      <ul>
        {payload.map((item: any) => (
          <li key={item.dataKey}>
            <span>{item.dataKey?.toString().toUpperCase()}</span>
            <strong>{formatCurrency(item.value as number)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceTrends;
