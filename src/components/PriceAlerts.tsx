import { formatMovement, formatCurrency } from '../utils/format';
import { DerivedProduct } from '../types';

interface PriceAlertsProps {
  movers: DerivedProduct[];
}

function PriceAlerts({ movers }: PriceAlertsProps) {
  if (!movers.length) return null;

  return (
    <section className="panel alerts-panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Movers</p>
          <h2>Price alerts</h2>
        </div>
      </header>
      <ul className="alerts-panel__list">
        {movers.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <p>{product.brand}</p>
            </div>
            <div>
              <span>{formatMovement(product.movement)}</span>
              <p>
                Best at {product.cheapest.supermarketId.toUpperCase()} • {formatCurrency(product.cheapest.price)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PriceAlerts;
