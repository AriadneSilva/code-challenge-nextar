import type { Offer } from "../../domain/offer/offer.entity";
import { FormOffer } from "../FormOffer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  offerData?: Offer;
};

export function Modal({ isOpen, onClose, offerData }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">
        <h2 className="text-xl font-semibold mb-4">
          {offerData ? "Editar Oferta" : "Criar Oferta"}
        </h2>

        <FormOffer initialOfferData={offerData} onSuccess={onClose} />
      </div>
    </div>
  );
}
