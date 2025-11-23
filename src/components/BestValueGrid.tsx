import { formatCurrency, formatMovement } from '../utils/format';
import { DerivedProduct } from '../types';

interface BestValueGridProps {
  products: DerivedProduct[];
}

function BestValueGrid({ products }: BestValueGridProps) {
  if (!products.length) return null;
  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Biggest savings</p>
          <h2>Switch &amp; save highlights</h2>
        </div>
      </header>
      <div className="grid grid--two">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div>
              <h3>{product.name}</h3>
              <p>{product.brand}</p>
            </div>
            <p className="product-card__price">
              {product.cheapest?.supermarketId && (
                <span>
                  {product.cheapest.supermarketId.toUpperCase()} • {formatCurrency(product.cheapest.price)}
                </span>
              )}
            </p>
            <p className="product-card__saving">
              Save {formatCurrency(product.savings)} vs {product.priciest?.supermarketId}
            </p>
            <p className="product-card__movement">{formatMovement(product.movement)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BestValueGrid;
