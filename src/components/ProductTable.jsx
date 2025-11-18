import { formatCurrency, formatDate, formatMovement } from '../utils/format';

function ProductTable({ products, onSelect, selectedId }) {
  if (!products.length) {
    return (
      <section className="panel">
        <p>No products match that search yet. Try another term or reset the filters.</p>
      </section>
    );
  }

  return (
    <section className="panel table-panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Product comparison</p>
          <h2>Track prices across stores</h2>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Best price</th>
            <th>Spread</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const isSelected = selectedId === product.id;
            return (
              <tr
                key={product.id}
                className={isSelected ? 'is-selected' : ''}
                onClick={() => onSelect(product)}
              >
                <td>
                  <div className="product-cell">
                    <strong>{product.name}</strong>
                    <p>
                      {product.brand} • {product.size} • {product.category}
                    </p>
                    <small>Updated {formatDate(product.lastUpdated)}</small>
                  </div>
                </td>
                <td>
                  <div className="price-chip" data-market={product.cheapest.supermarketId}>
                    <span>{product.cheapest.supermarketId.toUpperCase()}</span>
                    <strong>{formatCurrency(product.cheapest.price)}</strong>
                    {product.cheapest.promo && <small>{product.cheapest.promo}</small>}
                  </div>
                </td>
                <td>
                  <div className="spread">
                    <strong>{formatCurrency(product.savings)}</strong>
                    <p>vs {product.priciest.supermarketId.toUpperCase()}</p>
                    <small>{product.spreadPercent}% price spread</small>
                  </div>
                </td>
                <td>
                  <span className={`movement movement--${getMovementTone(product.movement)}`}>
                    {formatMovement(product.movement)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

const getMovementTone = (value) => {
  if (value < 0) return 'down';
  if (value > 0) return 'up';
  return 'flat';
};

export default ProductTable;
