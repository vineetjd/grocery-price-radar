const currencyFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  day: 'numeric'
});

export const formatCurrency = (value) => currencyFormatter.format(value);
export const formatPercent = (value) => `${value.toFixed(1)}%`;
export const formatDate = (value) => dateFormatter.format(new Date(value));
export const formatMovement = (value) => {
  if (value === 0) return 'No change week-on-week';
  const direction = value > 0 ? 'up' : 'down';
  return `${direction} £${Math.abs(value).toFixed(2)} vs last week`;
};
