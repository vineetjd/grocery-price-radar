function SupermarketGrid({ basket }) {
  if (!basket?.entries?.length) return null;
  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Covered retailers</p>
          <h2>Major UK supermarkets</h2>
        </div>
      </header>
      <div className="grid grid--three">
        {basket.entries.map((entry) => (
          <article key={entry.market.id} className="market-card" style={{ borderColor: entry.market.color }}>
            <div>
              <h3>{entry.market.name}</h3>
              <p>{entry.market.tagline}</p>
            </div>
            <div className="market-card__footer">
              <span>Loyalty: {entry.market.loyalty}</span>
              <span>Avg basket £{entry.total.toFixed(2)}</span>
            </div>
            <a href={entry.market.website} target="_blank" rel="noreferrer">
              Visit site
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SupermarketGrid;
