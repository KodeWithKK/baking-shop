export default function findOrgPrice(currPrice: number): number {
  const price = Math.trunc(currPrice * 1.11);
  const remaining = 9 - (price % 10);
  return price + remaining;
}
