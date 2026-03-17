import type { Offer } from "../../../domain/offer/offer.entity";
import { calculateDiscount } from "../../../domain/offer/offer.service";

type Props = {
  offerData: Offer;
};

export function Container({ offerData }: Props) {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-700 mb-1">
        {offerData.title}
      </h3>

      <span className="text-gray-400 line-through">R$ {offerData.price}</span>

      <span className="text-3xl font-bold text-blue-600 mb-2">
        R$ {calculateDiscount(offerData.price, offerData.discountPercentage)}
      </span>

      <span className="text-gray-500 mb-3">Estoque: {offerData.stock}</span>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-gray-500">Expires in:</span>

        {/* <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          {offerData.endDate.toDateString()}
        </span> */}
      </div>
    </>
  );
}
