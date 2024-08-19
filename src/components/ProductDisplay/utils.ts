export function findOrgPrice(currPrice: number): number {
  const price = Math.trunc(currPrice * 1.11);
  const remaining = 9 - (price % 10);
  return price + remaining;
}

export function findDiscount(
  currPrice: number,
  orgPrice: number | null,
): number {
  const ogPrice = orgPrice ?? findOrgPrice(currPrice);
  return Math.trunc(((ogPrice - currPrice) / ogPrice) * 100);
}

export const cakeWeights = [
  {
    id: 101,
    value: 0.5,
  },
  {
    id: 102,
    value: 1,
  },
  {
    id: 103,
    value: 1.5,
  },
  {
    id: 104,
    value: 2,
  },
  {
    id: 105,
    value: 4,
  },
];

export const cakeQuantity = [
  {
    id: 101,
    value: 1,
  },
  {
    id: 102,
    value: 2,
  },
  {
    id: 103,
    value: 3,
  },
  {
    id: 104,
    value: 4,
  },
  {
    id: 105,
    value: 5,
  },
];
