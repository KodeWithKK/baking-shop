import { Review } from "@/types/global";

function ProductReviews({ reviews }: Readonly<{ reviews: Review[] }>) {
  return (
    <div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-400 py-2.5 first:border-t"
        >
          <p>
            <span className="text-[15px] font-bold">{review.name}</span>
            <span className="ml-2 rounded bg-[#1C9550]/10 px-1 py-0.5 text-[13px] font-medium text-[#1C9550]">
              {review.rating} ★
            </span>
          </p>
          <p className="text-[12px] text-gray-700">
            <span>Posted on {review.postedOn} • </span>
            <span>{review.location}</span>
          </p>
          <p className="text-[15px]">{review.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductReviews;
