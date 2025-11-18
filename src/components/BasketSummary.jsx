import { formatCurrency } from '../utils/format';

function BasketSummary({ basket }) {
  if (!basket?.entries?.length) return null;

  const spread = basket.trailing && basket.leader ? basket.trailing.total - basket.leader.total : 0;
  const leaderName = basket.leader?.market.name;
  const trailingName = basket.trailing?.market.name;

  return (
    <section className="panel basket-panel">
      <header>
        <p className="eyebrow">Weekly basket</p>
        <h2>Where the full trolley is cheapest</h2>
      </header>
      <div className="basket-panel__list">
        {basket.entries.map((entry, index) => (
          <div key={entry.market.id} className="basket-panel__row">
            <div>
              <p>{index + 1}. {entry.market.name}</p>
              <small>{entry.market.tagline}</small>
            </div>
            <strong>{formatCurrency(entry.total)}</strong>
          </div>
        ))}
      </div>
      <p className="basket-panel__spread">
        {spread > 0 && leaderName && trailingName
          ? `${leaderName} saves ${formatCurrency(spread)} vs ${trailingName}`
          : 'All supermarkets are level this week'}
      </p>
    </section>
  );
}

export default BasketSummary;
