export function formatReviews(review: number) {
  return review >= 1000 ? `${(review / 1000).toFixed(1)}k` : review;
}
