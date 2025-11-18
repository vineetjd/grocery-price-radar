export const supermarkets = [
  {
    id: 'tesco',
    name: 'Tesco',
    color: '#00539f',
    website: 'https://www.tesco.com',
    tagline: 'Clubcard Prices',
    loyalty: 'Clubcard'
  },
  {
    id: 'sainsburys',
    name: "Sainsbury's",
    color: '#ec7000',
    website: 'https://www.sainsburys.co.uk',
    tagline: 'Nectar Prices',
    loyalty: 'Nectar'
  },
  {
    id: 'asda',
    name: 'Asda',
    color: '#78be20',
    website: 'https://groceries.asda.com',
    tagline: 'Rollback Savings',
    loyalty: 'Rewards'
  },
  {
    id: 'morrisons',
    name: 'Morrisons',
    color: '#00543d',
    website: 'https://groceries.morrisons.com',
    tagline: 'Price Crunch',
    loyalty: 'More'
  },
  {
    id: 'aldi',
    name: 'Aldi',
    color: '#00a6a0',
    website: 'https://www.aldi.co.uk',
    tagline: 'Everyday Low Price',
    loyalty: 'Saver'
  },
  {
    id: 'lidl',
    name: 'Lidl',
    color: '#0050aa',
    website: 'https://www.lidl.co.uk',
    tagline: 'Lidl Plus',
    loyalty: 'Plus'
  },
  {
    id: 'waitrose',
    name: 'Waitrose',
    color: '#00663a',
    website: 'https://www.waitrose.com',
    tagline: 'Quality First',
    loyalty: 'MyWaitrose'
  }
];

export const products = [
  {
    id: 'milk-2l',
    name: 'Semi-skimmed Milk',
    brand: 'Own Label',
    size: '2L bottle',
    category: 'Dairy',
    nutrition: 'Per 100ml: 198kJ / 47kcal, 1.8g fat, 4.8g carbs',
    lastUpdated: '2024-05-28',
    staple: true,
    prices: [
      { supermarketId: 'aldi', price: 1.55, promo: 'Everyday price' },
      { supermarketId: 'lidl', price: 1.55 },
      { supermarketId: 'tesco', price: 1.6, promo: 'Clubcard' },
      { supermarketId: 'asda', price: 1.6 },
      { supermarketId: 'sainsburys', price: 1.65 },
      { supermarketId: 'morrisons', price: 1.65 },
      { supermarketId: 'waitrose', price: 1.75 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 1.49, lidl: 1.52, tesco: 1.55, asda: 1.6, sainsburys: 1.6, morrisons: 1.6, waitrose: 1.7 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 1.49, lidl: 1.52, tesco: 1.55, asda: 1.55, sainsburys: 1.6, morrisons: 1.6, waitrose: 1.7 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 1.55, lidl: 1.55, tesco: 1.6, asda: 1.6, sainsburys: 1.65, morrisons: 1.65, waitrose: 1.75 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 1.55, lidl: 1.55, tesco: 1.6, asda: 1.6, sainsburys: 1.65, morrisons: 1.65, waitrose: 1.75 }
      }
    ]
  },
  {
    id: 'eggs-12',
    name: 'Free-range Eggs',
    brand: 'Mixed Weight',
    size: 'Box of 12',
    category: 'Dairy',
    nutrition: 'Per 100g: 547kJ / 131kcal, 9.7g fat, 0.4g carbs',
    lastUpdated: '2024-05-27',
    staple: true,
    prices: [
      { supermarketId: 'aldi', price: 2.25 },
      { supermarketId: 'lidl', price: 2.35 },
      { supermarketId: 'asda', price: 2.4, promo: 'Rollback' },
      { supermarketId: 'tesco', price: 2.5 },
      { supermarketId: 'sainsburys', price: 2.55 },
      { supermarketId: 'morrisons', price: 2.5 },
      { supermarketId: 'waitrose', price: 2.7 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 2.15, lidl: 2.2, tesco: 2.45, asda: 2.45, sainsburys: 2.55, morrisons: 2.45, waitrose: 2.65 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 2.2, lidl: 2.2, tesco: 2.45, asda: 2.4, sainsburys: 2.55, morrisons: 2.45, waitrose: 2.65 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 2.25, lidl: 2.3, tesco: 2.45, asda: 2.45, sainsburys: 2.55, morrisons: 2.5, waitrose: 2.7 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 2.25, lidl: 2.35, tesco: 2.5, asda: 2.4, sainsburys: 2.55, morrisons: 2.5, waitrose: 2.7 }
      }
    ]
  },
  {
    id: 'bread-loaf',
    name: 'Wholemeal Bread',
    brand: '800g loaf',
    size: '800g',
    category: 'Bakery',
    nutrition: 'Per slice: 90kcal, 0.9g fat, 14.8g carbs',
    lastUpdated: '2024-05-26',
    staple: true,
    prices: [
      { supermarketId: 'lidl', price: 0.95 },
      { supermarketId: 'aldi', price: 0.95 },
      { supermarketId: 'asda', price: 1.05 },
      { supermarketId: 'tesco', price: 1.1, promo: 'Clubcard' },
      { supermarketId: 'sainsburys', price: 1.1 },
      { supermarketId: 'morrisons', price: 1.15 },
      { supermarketId: 'waitrose', price: 1.3 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 0.95, lidl: 0.95, tesco: 1.05, asda: 1.05, sainsburys: 1.1, morrisons: 1.1, waitrose: 1.25 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 0.95, lidl: 0.95, tesco: 1.1, asda: 1.05, sainsburys: 1.1, morrisons: 1.1, waitrose: 1.25 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 0.95, lidl: 0.95, tesco: 1.1, asda: 1.05, sainsburys: 1.1, morrisons: 1.15, waitrose: 1.3 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 0.95, lidl: 0.95, tesco: 1.1, asda: 1.05, sainsburys: 1.1, morrisons: 1.15, waitrose: 1.3 }
      }
    ]
  },
  {
    id: 'pasta-500g',
    name: 'Penne Pasta',
    brand: 'Durum Wheat',
    size: '500g',
    category: 'Pantry',
    nutrition: 'Per 75g (dry): 1100kJ / 260kcal, 1.5g fat, 53g carbs',
    lastUpdated: '2024-05-29',
    staple: true,
    prices: [
      { supermarketId: 'aldi', price: 0.75 },
      { supermarketId: 'lidl', price: 0.75 },
      { supermarketId: 'asda', price: 0.95 },
      { supermarketId: 'tesco', price: 1, promo: 'Clubcard' },
      { supermarketId: 'sainsburys', price: 1 },
      { supermarketId: 'morrisons', price: 1.05 },
      { supermarketId: 'waitrose', price: 1.2 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 0.65, lidl: 0.69, tesco: 0.95, asda: 0.85, sainsburys: 0.95, morrisons: 1, waitrose: 1.15 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 0.7, lidl: 0.7, tesco: 0.95, asda: 0.9, sainsburys: 0.95, morrisons: 1, waitrose: 1.15 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 0.75, lidl: 0.75, tesco: 1, asda: 0.95, sainsburys: 1, morrisons: 1.05, waitrose: 1.2 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 0.75, lidl: 0.75, tesco: 1, asda: 0.95, sainsburys: 1, morrisons: 1.05, waitrose: 1.2 }
      }
    ]
  },
  {
    id: 'chicken-breast',
    name: 'Chicken Breast Fillets',
    brand: 'British',
    size: '1kg',
    category: 'Meat & Fish',
    nutrition: 'Per 100g: 110kcal, 1.8g fat, 0g carbs, 24g protein',
    lastUpdated: '2024-05-29',
    staple: false,
    prices: [
      { supermarketId: 'asda', price: 5.75, promo: 'Rollback' },
      { supermarketId: 'tesco', price: 6 },
      { supermarketId: 'sainsburys', price: 6.25 },
      { supermarketId: 'morrisons', price: 6.1 },
      { supermarketId: 'aldi', price: 5.85 },
      { supermarketId: 'lidl', price: 5.85 },
      { supermarketId: 'waitrose', price: 7 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 5.8, lidl: 5.8, tesco: 6.1, asda: 5.9, sainsburys: 6.25, morrisons: 6.2, waitrose: 7.1 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 5.8, lidl: 5.8, tesco: 6.05, asda: 5.85, sainsburys: 6.25, morrisons: 6.15, waitrose: 7.1 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 5.85, lidl: 5.85, tesco: 6.05, asda: 5.8, sainsburys: 6.25, morrisons: 6.1, waitrose: 7.05 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 5.85, lidl: 5.85, tesco: 6, asda: 5.75, sainsburys: 6.25, morrisons: 6.1, waitrose: 7 }
      }
    ]
  },
  {
    id: 'toilet-roll',
    name: 'Recycled Toilet Tissue',
    brand: '9 Mega Rolls',
    size: '9 rolls',
    category: 'Household',
    nutrition: '',
    lastUpdated: '2024-05-25',
    staple: false,
    prices: [
      { supermarketId: 'aldi', price: 3.99 },
      { supermarketId: 'lidl', price: 3.95 },
      { supermarketId: 'tesco', price: 4.25, promo: 'Clubcard' },
      { supermarketId: 'asda', price: 4.5 },
      { supermarketId: 'sainsburys', price: 4.5 },
      { supermarketId: 'morrisons', price: 4.75 },
      { supermarketId: 'waitrose', price: 5.25 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 3.8, lidl: 3.8, tesco: 4.25, asda: 4.4, sainsburys: 4.4, morrisons: 4.6, waitrose: 5.2 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 3.9, lidl: 3.85, tesco: 4.25, asda: 4.4, sainsburys: 4.45, morrisons: 4.6, waitrose: 5.2 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 3.95, lidl: 3.9, tesco: 4.25, asda: 4.5, sainsburys: 4.5, morrisons: 4.75, waitrose: 5.25 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 3.99, lidl: 3.95, tesco: 4.25, asda: 4.5, sainsburys: 4.5, morrisons: 4.75, waitrose: 5.25 }
      }
    ]
  },
  {
    id: 'berries',
    name: 'Blueberries',
    brand: '125g punnet',
    size: '125g',
    category: 'Fresh Produce',
    nutrition: 'Per 100g: 240kJ / 57kcal, 0.3g fat, 14g carbs',
    lastUpdated: '2024-05-24',
    staple: false,
    prices: [
      { supermarketId: 'aldi', price: 1.89 },
      { supermarketId: 'lidl', price: 1.79 },
      { supermarketId: 'tesco', price: 2 },
      { supermarketId: 'asda', price: 2.1 },
      { supermarketId: 'sainsburys', price: 2.1 },
      { supermarketId: 'morrisons', price: 2.2 },
      { supermarketId: 'waitrose', price: 2.4 }
    ],
    priceHistory: [
      {
        date: '2024-05-07',
        points: { aldi: 1.79, lidl: 1.69, tesco: 1.95, asda: 2, sainsburys: 2.05, morrisons: 2.1, waitrose: 2.35 }
      },
      {
        date: '2024-05-14',
        points: { aldi: 1.89, lidl: 1.79, tesco: 1.95, asda: 2.05, sainsburys: 2.05, morrisons: 2.15, waitrose: 2.4 }
      },
      {
        date: '2024-05-21',
        points: { aldi: 1.89, lidl: 1.79, tesco: 2, asda: 2.05, sainsburys: 2.1, morrisons: 2.2, waitrose: 2.4 }
      },
      {
        date: '2024-05-28',
        points: { aldi: 1.89, lidl: 1.79, tesco: 2, asda: 2.1, sainsburys: 2.1, morrisons: 2.2, waitrose: 2.4 }
      }
    ]
  }
];
