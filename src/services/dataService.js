import { products, supermarkets } from '../data/products';

const supermarketIndex = new Map(supermarkets.map((market) => [market.id, market]));
const clone = (value) => JSON.parse(JSON.stringify(value));

const addDerivedFields = (product) => {
  const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);
  const cheapest = sortedPrices[0];
  const priciest = sortedPrices[sortedPrices.length - 1];
  const savings = Number((priciest.price - cheapest.price).toFixed(2));
  const lastWeek = product.priceHistory[product.priceHistory.length - 2];
  const currentWeek = product.priceHistory[product.priceHistory.length - 1];

  let movement = 0;
  if (lastWeek && currentWeek) {
    const lastBest = Math.min(...Object.values(lastWeek.points));
    const currentBest = Math.min(...Object.values(currentWeek.points));
    movement = Number((currentBest - lastBest).toFixed(2));
  }

  return {
    ...product,
    cheapest,
    priciest,
    savings,
    movement,
    spreadPercent: Number(((savings / priciest.price) * 100).toFixed(1))
  };
};

export function listSupermarkets() {
  return clone(supermarkets);
}

export function listProducts({ category, searchTerm, staplesOnly } = {}) {
  const normalised = products
    .filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesStaple = staplesOnly ? product.staple : true;
      const searchable = `${product.name} ${product.brand}`.toLowerCase();
      const matchesSearch = searchTerm ? searchable.includes(searchTerm.trim().toLowerCase()) : true;
      return matchesCategory && matchesStaple && matchesSearch;
    })
    .map(addDerivedFields);

  return normalised;
}

export function buildBasketTotals(productsList = products) {
  const totals = supermarkets.reduce((acc, market) => {
    acc[market.id] = 0;
    return acc;
  }, {});

  productsList.forEach((product) => {
    product.prices.forEach((pricePoint) => {
      totals[pricePoint.supermarketId] += pricePoint.price;
    });
  });

  const entries = Object.entries(totals).map(([marketId, total]) => ({
    market: supermarketIndex.get(marketId),
    total: Number(total.toFixed(2))
  }));

  entries.sort((a, b) => a.total - b.total);

  return {
    entries,
    leader: entries[0],
    trailing: entries[entries.length - 1]
  };
}

export function getPriceTimeline(product) {
  return product.priceHistory.map((entry) => ({
    date: entry.date,
    ...entry.points
  }));
}

export function getCategoryList() {
  return Array.from(new Set(products.map((product) => product.category)));
}

export function getTopMovers(limit = 3) {
  return listProducts()
    .slice()
    .sort((a, b) => a.movement - b.movement)
    .slice(0, limit);
}
