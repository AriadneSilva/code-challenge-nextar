import type { Offer } from "../../domain/offer/offer.entity";
import { ImageContainer } from "./ImageContainer";
import { Container } from "./Container";

type Props = {
  offerData: Offer;
  onOpenModal: () => void;
  onCancel: (id: string) => void;
};

export function Card({ offerData, onOpenModal, onCancel }: Props) {
  return (
    <>
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
              <button
                className="bg-blue-700 text-white px-5 py-2 rounded-lg"
                onClick={() => {
                  onOpenModal();
                }}
              >
                Editar
              </button>

              <button
                className="bg-blue-700 text-white px-5 py-2 rounded-lg"
                onClick={() => onCancel(offerData.id)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
