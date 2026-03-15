import type { Offer } from "../../domain/offer/offer.entity";
import { ImageContainer } from "./ImageContainer";
import { Container } from "./Container";
import { useOfferStore } from "../../store/offer.store";

type Props = {
  offerData: Offer;
};

export function Card({ offerData }: Props) {
  const { cancelOffer } = useOfferStore();

  return (
    <div className="flex gap-8 p-6 bg-white rounded-2xl shadow-lg">
      <ImageContainer
        status={offerData.status}
        urlImage={offerData.urlImage}
        imgTitle={offerData.title}
        discount={offerData.discountPercentage}
      />
      <div className="flex flex-col flex-1">
        <Container offerData={offerData} />
        <div className="flex flex-col flex-1">
          <div className="flex gap-3">
            <button className="bg-black text-white px-5 py-2 rounded-lg">
              Editar
            </button>

            <button
              className="bg-gray-900 text-gray-400 px-5 py-2 rounded-lg"
              onClick={() => cancelOffer(offerData.id)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
