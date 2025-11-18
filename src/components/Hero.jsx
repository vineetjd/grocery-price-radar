import { formatCurrency, formatDate } from '../utils/format';

function Hero({ productCount, stapleCount, lastUpdated, leader, spread }) {
  return (
    <header className="hero">
      <div>
        <p className="eyebrow">UK supermarket basket insights</p>
        <h1>Compare prices across the major grocers in seconds</h1>
        <p className="hero__lead">
          We track staple products every week so you can see where your shop is cheapest, which
          retailer is trending up, and how much you could save by switching.
        </p>
        <div className="hero__stats">
          <div>
            <span>Products tracked</span>
            <strong>{productCount}</strong>
          </div>
          <div>
            <span>Everyday essentials</span>
            <strong>{stapleCount}</strong>
          </div>
          <div>
            <span>Last refreshed</span>
            <strong>{formatDate(lastUpdated)}</strong>
          </div>
        </div>
      </div>
      <div className="hero__card">
        <p className="eyebrow">This week&apos;s leader</p>
        {leader ? (
          <>
            <h3>{leader.market.name}</h3>
            <p>{formatCurrency(leader.total)} average basket</p>
            <p className="hero__delta">Up to {formatCurrency(spread)} separates the basket extremes.</p>
            <a href={leader.market.website} target="_blank" rel="noreferrer" className="button">
              View weekly offers
            </a>
          </>
        ) : (
          <p>No basket data yet</p>
        )}
      </div>
    </header>
  );
}

export default Hero;
